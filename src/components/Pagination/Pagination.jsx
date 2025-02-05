import React from "react";
import "./Pagination.css";


const Pagination = ({ currentPage, setPage, totalProducts, productsPerPage }) => {
  const totalPages = Math.max(1, Math.ceil(totalProducts / productsPerPage));

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="pagination">
      <button className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button 
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? "pagination-btn-active" : "pagination-btn"}
        >
          {index + 1}
        </button>
      ))}

      <button className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

