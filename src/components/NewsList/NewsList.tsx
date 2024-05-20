import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../helpers/hocs/withskeleton";
import { INews } from "../../interfaces";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList,  10, "column",   "item",);

export default NewsListWithSkeleton;
