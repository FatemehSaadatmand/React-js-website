import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import "./CategoryFilter.css";
import { fetchCategoriesMain } from "./requests";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchCategoriesMain()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromParams = params.get("category");
    if (categoryFromParams) {
      setSelectedCategory(categoryFromParams);
    }
  }, [location.search, setSelectedCategory]);

  const handleCheckboxChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);

    const params = new URLSearchParams(location.search);
    if (categoryId) {
      params.set("category", categoryId);
    } else {
      params.delete("category");
    }
    params.set("page", 1); 
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="categories">
      <h3 className="category-title">CATEGORIES</h3>
      {categories.map((category) => (
        <label className="label" key={category._id}>
          <input className="input-radio"
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

