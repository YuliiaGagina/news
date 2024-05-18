import styles from "./styles.module.css";

import withSkeleton from "../helpers/hocs/withskeleton";
import NewsBanner from "./../NewsBanner/NewsBanner";

const BannerList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton(BannerList, "banner", 9, "row");

export default BannerListWithSkeleton;
