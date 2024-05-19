import { getLatestNews } from "../../api/apiNews";
import BannerList from "../BannerList/BannerList";
import { useFetch } from "./../../components/helpers/hocs/useFetch";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannerList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
