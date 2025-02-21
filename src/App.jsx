import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import BrandCheckbox from "./components/BrandCheckbox";
import RangeSlider from "./components/RangeSlider";
import TopSelling from "./components/TopSelling";
import ProductPage from "./ProductPage";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <Router>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setCurrentPage={setCurrentPage}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="flex">
                  <div className="sidebar">
                    <CategoryFilter
                      selectedCategory={selectedCategory}
                      setSelectedCategory={handleCategoryChange}
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
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;




