import styles from "./styles.module.css"

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void

}

const Search = ({keywords, setKeywords} : Props) => {
    return (
        <div className={styles.search}>
      
        
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