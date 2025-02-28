// MainPage.jsx
import React from "react";
import CategoryFilter from "../../components/CategoryFilter";
import RangeSlider from "../../components/RangeSlider";
import BrandCheckbox from "../../components/BrandCheckbox";
import TopSelling from "../../components/TopSelling";
import ProductList from "../../components/ProductList";
import "./MainPage.css"

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

export default MainPage;
