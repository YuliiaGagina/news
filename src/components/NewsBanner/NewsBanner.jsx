import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { formatTimeAgo } from "./../helpers/formatTimeAgo";
import Image from "./../Image/Image";
import withSkeleton from "./../helpers/hocs/withskeleton";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

NewsBanner.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    published: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsBannerWithSkeleton;
