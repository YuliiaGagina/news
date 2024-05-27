import { INews, NewsBanner } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withskeleton";
import styles from "./styles.module.css";



interface Props {
  banners?: INews[] | null;
}

const BannerList = ({ banners  }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton<Props>(BannerList ,9, "row", "banner",  );

export default BannerListWithSkeleton;
