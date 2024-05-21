
import { useTheme } from "../../context/ThemeContext";


import { themeIcons } from "../../assets";
import { formateDate } from "../helpers/formatDate";
import styles from "./styles.module.css";



const Header = () => {
  const {isDark, toggleTheme} = useTheme()
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>    <h1 className={styles.title}>NEWS REACTIFY</h1>
      <h3 className={styles.date}>{formateDate(new Date())}</h3></div>
      <img src={isDark ? themeIcons.light : themeIcons.dark} width={30} alt="icon" onClick={toggleTheme } />
    </header>
  );
};

export default Header;
