import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard/ProductCard';

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = selectedCategory
      ? `https://kaaryar-ecom.liara.run/v1/products?category=${selectedCategory}`
      : `https://kaaryar-ecom.liara.run/v1/products?page=1&limit=9`;

    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products || []);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch products');
        setIsLoading(false);
      });
  }, [selectedCategory]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

 