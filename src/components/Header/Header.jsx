import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  setCurrentPage,
}) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch categories on component mount
  useEffect(() => {
    fetch("https://kaaryar-ecom.liara.run/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Sync query params with selected category
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromParams = params.get("category");
    if (categoryFromParams) {
      setSelectedCategory(categoryFromParams);
    } else {
      setSelectedCategory("All Categories");
    }
  }, [location.search, setSelectedCategory]);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;

    // Set "All Categories" or find the category ID
    if (categoryName === "All Categories") {
      setSelectedCategory("All Categories");
    } else {
      const category = categories.find((cat) => cat.name === categoryName);
      setSelectedCategory(category ? category._id : null);
    }

    setCurrentPage(1);

    // Update query params
    const params = new URLSearchParams(location.search);
    if (categoryName === "All Categories") {
      params.delete("category");
    } else {
      const category = categories.find((cat) => cat.name === categoryName);
      params.set("category", category ? category._id : "");
    }
    params.set("page", 1); // Reset to page 1 on category change
    navigate(`?${params.toString()}`);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setCurrentPage(1);

    // Update query params
    const params = new URLSearchParams(location.search);
    if (selectedCategory && selectedCategory !== "All Categories") {
      params.set("category", selectedCategory);
    }
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    params.set("page", 1); // Reset to page 1 on search
    navigate(`?${params.toString()}`);
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
            value={
              selectedCategory === "All Categories"
                ? "All Categories"
                : categories.find((c) => c._id === selectedCategory)?.name || "All Categories"
            }
            onChange={handleCategoryChange}
          >
            <option>All Categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

