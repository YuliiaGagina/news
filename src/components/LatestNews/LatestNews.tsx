
import { useGetLatestNewsQuery } from "../../store/servicies/newsApi";
import BannerList from "../BannerList/BannerList";

import styles from "./styles.module.css";

const LatestNews = () => {
  // const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannerList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
