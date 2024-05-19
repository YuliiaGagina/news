import { formateDate } from "../helpers/formatDate";
import styles from "./styles.module.css";
import { useFetch } from "../helpers/hocs/useFetch";
import { getCategories } from "../../api/apiNews";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);
  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
