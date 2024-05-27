import { useAppSelector, useAppDispatch } from "@/app/appStore";

import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";

import { TOTAL_PAGES } from "@/shared/constants/constant";

import NewsFilters from "../NewsFilters/NewsFilters";
import styles from "./styles.module.css";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import NewsListWithSkeleton from "@/widgets/news/ui/NewsList/NewsList";





const NewsByFilter = () => {

  const filters = useAppSelector(state => state.news.filters);
  
  const dispatch = useAppDispatch();

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
          ...filters,
    keywords: debouncedKeywords,
    })



  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
    
     dispatch(setFilters({ key: "page_number", value: filters.page_number + 1 })) 
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
   
       dispatch(setFilters({ key: "page_number", value: filters.page_number - 1 })) 
    }
  };

  const handlePageClick = (pageNumber : number) => {
   
        dispatch(setFilters({ key: "page_number", value: pageNumber })) 
  };
  return (
    <section className={styles.section}>
      <NewsFilters  filters={filters}  />

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
