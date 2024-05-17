import styles from "./styles.module.css";
import NewsItem from "./../NewsItem/NewsItem";
import withSkeleton from "./../helpers/hocs/withskeleton";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);
export default NewsListWithSkeleton;
