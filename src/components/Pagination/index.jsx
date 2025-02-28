import React from "react";
import PropTypes from "prop-types";
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
      <button className="btn pagination-btn"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button 
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? "btn pagination-btn-active" : "btn pagination-btn"}
        >
          {index + 1}
        </button>
      ))}

      <button className="btn pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalProducts: PropTypes.number.isRequired,
  productsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
