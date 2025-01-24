import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROOT_ID } from "../../configs/constants";
import "./Header.css";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);


  useEffect(() => {
    fetch("https://kaaryar-ecom.liara.run/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        const modifiedData = [{name: "All Categories", _id: ROOT_ID}, ...data];
        setCategories(modifiedData)
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;

    const category = categories.find((cat) => cat.name === categoryName);

    params.set("category", category ? category._id : null);
    
    params.set("page", 1); 

    navigate(`?${params.toString()}`);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    params.set("page", 1);

    if (!query) {
      params.delete("search")
    } else {
      params.set("search", query)
    }

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
            value={categories.find((c) => c._id === params.get("category"))?.name}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search here"
            value={params.get("search") ? params.get("search") : ""}
            onChange={handleSearchChange}
          />
          <button>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

