import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";
import Pagination from "./Pagination/Pagination";
import { ROOT_ID } from "../configs/constants";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);
  const location = useLocation();
  const urlParams =  useMemo(() => new URLSearchParams(location.search), [location.search]);
  
  useEffect(() => {
    let url = "https://kaaryar-ecom.liara.run/v1/products";
    const params = {
      limit: productsPerPage,
    };
    if (urlParams.get("page")) {
      params.page = urlParams.get("page");
    }

    if (urlParams.get("category") !== ROOT_ID && urlParams.get("category")) {
      params.category = urlParams.get("category");
    }

    if (urlParams.get("search")) {
      params.search = urlParams.get("search");
    }

    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

    setIsLoading(true);
    setError(null);


    fetch(`${url}?${queryString}`)
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
  }, [productsPerPage, urlParams]);

  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value));
    urlParams.set("page", 1);
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
          {[10, 20, 30].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={urlParams.get("page")}
        setPage={page => urlParams.set("page", page)}
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default ProductList;
