import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div>
          <div className="product">
            <div className="product-card">
              <div className="new-badge">NEW</div>
                <img src={product.images[0]} alt={product.name} className="product-image" />
                <p className="category-name">{product.category.name}</p>
                <div className="product-name">{product.name}</div>
                <p className="product-price">${product.price.toFixed(2)}</p> 
                <div className="product-rating">★★★★☆</div>

                <div className="product-icons">
                    <i className="pruduct-i">♡</i>
                    <i className="pruduct-i">⇌</i>
                    <i className="pruduct-i">👁</i>
                  </div>
            </div>
        <div className="add-to-cart">
     <button className="btn add-to-cart-btn" tabindex="0"><i className="fa fa-shopping-cart"></i> add to cart</button>
        </div>
       
    </div>

    </div>
  );
};
export default ProductCard;