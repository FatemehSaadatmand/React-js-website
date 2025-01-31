import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import 'font-awesome/css/font-awesome.min.css';

const Header = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  setCurrentPage,
  cartItems,
  setCartItems,
  totalPrice,
  totalItems,
}) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://kaaryar-ecom.liara.run/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

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

    if (categoryName === "All Categories") {
      setSelectedCategory("All Categories");
    } else {
      const category = categories.find((cat) => cat.name === categoryName);
      setSelectedCategory(category ? category._id : null);
    }

    setCurrentPage(1);

    const params = new URLSearchParams(location.search);
    if (categoryName === "All Categories") {
      params.delete("category");
    } else {
      const category = categories.find((cat) => cat.name === categoryName);
      params.set("category", category ? category._id : "");
    }
    params.set("page", 1); 
    navigate(`?${params.toString()}`);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setCurrentPage(1);

    const params = new URLSearchParams(location.search);
    if (selectedCategory && selectedCategory !== "All Categories") {
      params.set("category", selectedCategory);
    }
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    params.set("page", 1); 
    navigate(`?${params.toString()}`);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <p><i class="fa fa-phone"></i> +021-95-51-84 |<i class="fa fa-envelope-o"></i> email@email.com |<i class="fa fa-map-marker"></i> 1734 Stonecoal Road</p>
        <div>
          <span><i className="fa fa-dollar"></i> USD</span> | <span><i className="fa fa-user-o"></i>My Account</span>
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
        <div className="cart-wish">
        <i class="fa fa-heart-o"></i>
          <button>Wishlist</button>
          <i class="fa fa-shopping-cart"></i>
          <button>Cart <span className="added-to-cart">{totalItems}</span></button>
        </div>
      </div>
      <div className="cart-total">
        <span>Total: ${totalPrice}</span>
      </div>
    </header>
  );
};

export default Header;

