import styles from "./styles.module.css";

import { useFetch } from "./../helpers/hocs/useFetch";
import { TOTAL_PAGES, PAGE_SIZE } from "./../../constants/constant";
import NewsList from "../NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import { getNews } from "./../../api/apiNews";

import { useDebounce } from "../../components/helpers/hooks/useDebounce";

import { useFilter } from "./../../components/helpers/hooks/useFilters";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";

const NewsByFilter = () => {
  // const { data: dataCategories } = useFetch(getCategories);

  const { filters, changeFilter } = useFilter({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
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

  const handlePageClick = (pageNumber) => {
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
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilter;
