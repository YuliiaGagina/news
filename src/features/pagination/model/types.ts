


export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
  handlePrevPage: () => void;
    handleNextPage: () => void;
   
}
