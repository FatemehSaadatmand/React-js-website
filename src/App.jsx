import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import ProductList from "./components/ProductList";
import BrandCheckbox from "./components/BrandCheckbox/BrandCheckbox";
import RangeSlider from "./components/RangeSlider/RangeSlider";
import TopSelling from "./components/TopSelling/TopSelling";
import ProductPage from "./ProductPage/ProductPage";

const App = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleAddToCart = (product, quantity) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (productIndex === -1) {
      updatedCart.push({ ...product, quantity });
    } else {
      updatedCart[productIndex].quantity += quantity;
    }

    setCartItems(updatedCart);
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  console.log (cartItems)
  return (
    <Router>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setCurrentPage={setCurrentPage}
        cartItems={cartItems}
        setCartItems={setCartItems}
        totalPrice={totalPrice}
        totalItems={totalItems}
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
        <Route path="/product/:id" element={<ProductPage handleAddToCart={handleAddToCart} />} />
      </Routes>
     </main>

      <Footer />
    </Router>
  );
};

export default App;

