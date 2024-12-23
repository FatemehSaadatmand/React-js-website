import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";
import Pagination from "./Pagination/Pagination";

const ProductList = ({ selectedCategory, currentPage, setCurrentPage }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const url = selectedCategory
      ? `https://kaaryar-ecom.liara.run/v1/products?category=${selectedCategory}&page=${currentPage}&limit=${productsPerPage}`
      : `https://kaaryar-ecom.liara.run/v1/products?page=${currentPage}&limit=${productsPerPage}`;

    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotalProducts(data.pagination.totalItems || 0); 
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setIsLoading(false);
      });
  }, [selectedCategory, currentPage, productsPerPage]);

  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value));
    setCurrentPage(1); 
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div>
        <label htmlFor="products-per-page">Products per page:</label>
        <select
          id="products-per-page"
          value={productsPerPage}
          onChange={handleProductsPerPageChange}
        >
          {[10, 20].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setPage={setCurrentPage}
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default ProductList;

