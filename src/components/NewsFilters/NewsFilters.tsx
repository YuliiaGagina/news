
import styles from "./styles.module.css";

import Search from "../Search/Search";
import Categories from "../Categories/Categories";

import { IFilters } from './../../interfaces/index';
import Slider from "../Slider/Slider";
import { useGetCategoriesQuery } from "../../store/servicies/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";


interface Props {
  filters: IFilters;
 
 
}

const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch()
  

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider >
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
            
               dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
   
        keywords={filters.keywords}
        setKeywords={(keywords) =>   dispatch(setFilters({ key: "keywords", value: keywords }))}

      />
    </div>
  );
};

export default NewsFilters;
