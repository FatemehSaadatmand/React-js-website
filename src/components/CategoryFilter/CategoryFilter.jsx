import React, { useState, useEffect } from "react";
import "./CategoryFilter.css";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://kaaryar-ecom.liara.run/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCheckboxChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="categories">
      <h3>Categories</h3>
      {categories.map((category) => (
        <label key={category._id}>
          <input
            type="radio"
            value={category._id}
            checked={selectedCategory === category._id}
            onChange={handleCheckboxChange}
          />
          {category.name}
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;

