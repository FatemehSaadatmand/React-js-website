import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import PropTypes from "prop-types";

const ProductPage = ({ handleAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchProductDetails (id) 
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddProductToCart = () => {
    handleAddToCart(product, quantity);
  };

  return (
    <div className="product-page">
      <img className="productpage-image" src={product.images[0]} alt={product.name} />
      <div className="productpage-detail">
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Category: {product.category.name}</p>
        <p>Stock: {product.stock}</p>
        <p>Rating: {product.rating.toFixed(1)} ({product.ratingCount} reviews)</p>
        <button className="btn product-page-btn" onClick={handleAddProductToCart}>Add to Cart</button>
        <br />
        <span>Quantity: </span>
        <input className="product-page-input"
          type="number"
          value={quantity}
          min="1"
          max={product.stock}
          onChange={handleQuantityChange}
        />
      </div>
    </div>
  );
};
ProductPage.propTypes = {
  handleAddProductToCart: PropTypes.func.isRequired
}
export default ProductPage;

