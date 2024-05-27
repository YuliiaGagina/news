
import { formateDate } from "@/shared/helpers/formatDate";
import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeProvider";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton";



const Header = () => {
  const {isDark} = useTheme()
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>    <h1 className={styles.title}>NEWS REACTIFY</h1>
        <h3 className={styles.date}>{formateDate(new Date())}</h3></div>
     <ThemeButton/>
    </header>)
};

export default Header;
