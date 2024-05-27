
import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css"

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void;
    

}

const Search = ({ keywords, setKeywords, }: Props) => {
     const {isDark} = useTheme()
    return (
        <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      
        
        <input type="text"
            onChange={(e) => { setKeywords(e.target.value) }}
            value={keywords}
            className={styles.input}
            placeholder='Javascript'
        />
        
 </div>
  );
};

export default Search;