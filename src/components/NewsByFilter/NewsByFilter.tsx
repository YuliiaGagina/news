import styles from "./styles.module.css";

import { useFetch } from "../helpers/hooks/useFetch";


import { getNews } from "../../api/apiNews";

import { useDebounce } from "../helpers/hooks/useDebounce";

import { useFilter } from "../helpers/hooks/useFilters";

import { NewsApiResponse, ParamsType } from "../../interfaces";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constant";
import NewsFilters from "../NewsFilters/NewsFilters";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import NewsListWithSkeleton from "../NewsList/NewsList";

const NewsByFilter = () => {
 

  const { filters, changeFilter } = useFilter({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber : number) => {
    changeFilter("page_number", pageNumber);
  };
  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilter;
