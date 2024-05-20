import { getLatestNews } from "../../api/apiNews";
import {  NewsApiResponse } from "../../interfaces";
import BannerList from "../BannerList/BannerList";
import { useFetch } from "../helpers/hooks/useFetch";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
 

  return (
    <section className={styles.section}>
      <BannerList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
