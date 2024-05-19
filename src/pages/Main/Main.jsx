import styles from "./styles.module.css";
import { getNews } from "./../../api/apiNews";

import { useDebounce } from "../../components/helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constants/constant";
import { useFetch } from "./../../components/helpers/hocs/useFetch";
import { useFilter } from "./../../components/helpers/hooks/useFilters";
import LatestNews from "./../../components/LatestNews/LatestNews";
import NewsByFilter from "../../components/NewsByFilter/NewsByFilter";

const Main = () => {
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

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data?.news} />
      <NewsByFilter
        news={data?.news}
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
      />
    </main>
  );
};

export default Main;
