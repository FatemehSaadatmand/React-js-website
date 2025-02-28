import React from "react";
import CategoryFilter from "../../components/CategoryFilter";
import RangeSlider from "../../components/RangeSlider";
import BrandCheckbox from "../../components/BrandCheckbox";
import TopSelling from "../../components/TopSelling";
import ProductList from "../../components/ProductList";
import "./MainPage.css";
import PropTypes from "prop-types";

const MainPage = ({
  selectedCategory,
  setSelectedCategory,
  currentPage,
  setCurrentPage,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div>
      <div className="flex">
        <div className="sidebar">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RangeSlider />
          <BrandCheckbox />
          <TopSelling />
        </div>
        <div className="product-container">
          <ProductList
            selectedCategory={selectedCategory}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
    </div>
  );
};
MainPage.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  }
    
export default MainPage;
