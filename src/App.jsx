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
    // Update localStorage whenever cartItems change
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
      // If the product is not already in the cart, add it
      updatedCart.push({ ...product, quantity });
    } else {
      // If the product is already in the cart, update its quantity
      updatedCart[productIndex].quantity += quantity;
    }

    setCartItems(updatedCart);
  };

  // Calculate total price and total items dynamically
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

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

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Product Store</h1>
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

      <Footer />
    </Router>
  );
};

export default App;

