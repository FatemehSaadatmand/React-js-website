import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainPage from "../MainPage"; 
import CartPage from "../CartPage"; 
import ProductPage from "../ProductPage";

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
    setCartItems((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item._id === product._id);
    
      if (productIndex !== -1) {
        return prevCart.map((item, index) =>
          index === productIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

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
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
                    <Route path="/product/:id" element={<ProductPage handleAddToCart={handleAddToCart} />} />
                    <Route path="/cart" element={<CartPage cartItems={cartItems} />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
