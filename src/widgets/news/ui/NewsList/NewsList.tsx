import { INews, NewsItem } from "@/entities/news";
import withSkeleton from "@/shared/hocs/withskeleton";
import styles from "./styles.module.css";


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
