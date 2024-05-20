import styles from "./styles.module.css";

import withSkeleton from "../helpers/hocs/withskeleton";

import { INews } from "../../interfaces";
import NewsBanner from "../NewsBanner/NewsBanner";

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
