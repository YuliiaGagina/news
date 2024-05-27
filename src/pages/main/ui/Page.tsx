import LatestNews from "@/pages/main/ui/LatestNews/LatestNews";
import styles from "./styles.module.css";


import NewsByFilter from "@/pages/main/ui/NewsByFilter/NewsByFilter";




const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilter  />
    </main>
  );
};

export default MainPage;
