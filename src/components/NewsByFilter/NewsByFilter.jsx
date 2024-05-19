import styles from "./styles.module.css";

import Categories from "./../../components/Categories/Categories";
import { getCategories } from "./../../api/apiNews";
import Pagination from "./../../components/Pagination/Pagination";
import Search from "./../../components/Search/Search";
import { useFetch } from "./../helpers/hocs/useFetch";
import { TOTAL_PAGES } from "./../../constants/constant";
import NewsList from "../NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";

const NewsByFilter = ({ filters, changeFilter, isLoading, news }) => {
  // const { data: dataCategories } = useFetch(getCategories);

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
      {/* {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      /> */}
      {/* <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      /> */}
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </section>
  );
};

export default NewsByFilter;
