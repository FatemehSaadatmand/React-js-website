import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import {fetchProductDetails} from "./requests";

const ProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
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

  return (
    <div className="product-page">
      <img className="productpage-image" src={product.images[0]} alt={product.name} />
        <div className="productpage-detail">
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category.name}</p>
            <p>Stock: {product.stock}</p>
            <p>Rating: {product.rating.toFixed(1)} ({product.ratingCount} reviews)</p>
        </div>
    </div>
  );
};

export default ProductPage;

