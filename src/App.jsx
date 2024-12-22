import React, { useState } from 'react';
import Header from './components/Header/Header'
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import ProductList from './components/ProductList';
import BrandCheckbox from './components/BrandCheckbox/BrandCheckbox';
import RangeSlider from './components/RangeSlider/RangeSlider';
import TopSelling from './components/TopSelling/TopSelling';
import Footer from './components/Footer/Footer';



const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };
  return (
    <div>
    <Header></Header>
      <h1>Product Store</h1>
  <div className="flex">
  <div className="sidebar">
  <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />
      <RangeSlider></RangeSlider>
      <BrandCheckbox></BrandCheckbox>
      <TopSelling></TopSelling>
      </div>
      <div className="product-container">
      <ProductList
        selectedCategory={selectedCategory}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </div>
  </div>
  <Footer></Footer>
    </div>
  );
};

export default App;

