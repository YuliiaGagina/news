
import { useTheme } from "@/app/providers/ThemeProvider";


import styles from "./styles.module.css";
import { IPaginationProps } from "../../model/types";



const PaginationButtons = ({
  totalPages,
  currentPage,
  handlePageClick,
  handlePrevPage,
  handleNextPage,

}: IPaginationProps) => {

  const {isDark} = useTheme()
  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currentPage}
              className={styles.pageNumber}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationButtons;
