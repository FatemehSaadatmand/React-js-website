// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductPage from "./views/ProductPage/ProductPage";
import MainPage from "./views/MainPage/MainPage"; // Import MainPage

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
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
