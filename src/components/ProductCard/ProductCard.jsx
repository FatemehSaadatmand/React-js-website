import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="new-badge">NEW</div>
      <img src={product.images[0]} alt={product.name} className="product-image" />
      <p className="category-name">{product.category.name}</p>
      <div className="product-name">{product.name}</div>
      <p className="product-price">${product.price.toFixed(2)}</p> 
      <div className="product-rating">★★★★☆</div>

      <div className="product-icons">
          <i className="heart-icon">♡</i>
          <i className="compare-icon">⇌</i>
          <i className="view-icon">👁</i>
        </div>

    </div>
  );
};
export default ProductCard;