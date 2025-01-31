import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = ({ handleAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("Fetching product with ID:", id);
    fetch(`https://kaaryar-ecom.liara.run/v1/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        return response.json();
      })
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
    console.log("New quantity:", newQuantity);
    setQuantity(newQuantity);
  };

  const handleAddProductToCart = () => {
    console.log("Adding product to cart:", product.name, "Quantity:", quantity);
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
        <button onClick={handleAddProductToCart}>Add to Cart</button>
        <br />
        <span>Quantity: </span>
        <input
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

export default ProductPage;

