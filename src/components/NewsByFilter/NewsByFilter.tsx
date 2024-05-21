import styles from "./styles.module.css";

import { useDebounce } from "../helpers/hooks/useDebounce";



import { TOTAL_PAGES } from "../../constants/constant";
import NewsFilters from "../NewsFilters/NewsFilters";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import NewsListWithSkeleton from "../NewsList/NewsList";
import { useGetNewsQuery } from "../../store/servicies/newsApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";



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
