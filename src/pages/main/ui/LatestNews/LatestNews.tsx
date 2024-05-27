



import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import BannerListWithSkeleton from "@/widgets/news/ui/BannerList/BannerList";

const LatestNews = () => {

  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannerListWithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
