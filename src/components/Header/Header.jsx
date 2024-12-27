import React, { useState, useEffect } from "react";

import "./Header.css";

const Header = ({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, setCurrentPage }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://kaaryar-ecom.liara.run/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    if (categoryName === "All Categories") {
      setSelectedCategory("All Categories");
    } else {
      const category = categories.find(cat => cat.name === categoryName);
      setSelectedCategory(category ? category._id : "");
    }

    setCurrentPage(1);  
  };

  return (
    <header className="header">
      <div className="top-bar">
        <p>+021-95-51-84 | email@email.com | 1734 Stonecoal Road</p>
        <div>
          <span>$ USD</span> | <span>My Account</span>
        </div>
      </div>

      <div className="main-bar">
        <div className="logo">Electro<span>.</span></div>
        <div className="search-bar">
          <select
            value={selectedCategory === "All Categories" ? "All Categories" : categories.find(c => c._id === selectedCategory)?.name || ""}
            onChange={handleCategoryChange}
          >
            <option>All Categories</option>
            {categories.map(category => (
              <option key={category._id} value={category.name}>{category.name}</option>
            ))}
          </select>
          <input 
            type="text" 
            placeholder="Search here" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

