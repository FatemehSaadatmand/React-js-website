import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { ROOT_CATEGORY, QUERY_PARAMS, DEFAULT_PAGE} from "../configs/constants";

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get(QUERY_PARAMS.CATEGORY) || ROOT_CATEGORY;
  const currentPage = parseInt(searchParams.get(QUERY_PARAMS.PAGE)) || DEFAULT_PAGE;

  useEffect(() => {
    let url = "https://kaaryar-ecom.liara.run/v1/products";
    const params = {
      page: currentPage,
      limit: productsPerPage,
    };

    if (selectedCategory && selectedCategory !== ROOT_CATEGORY) {
      params.category = selectedCategory;
    }

    if (searchQuery) {
      params.search = searchQuery;
    }

    url += "?" + new URLSearchParams(params).toString();

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
  }, [selectedCategory, currentPage, productsPerPage, searchQuery]);

  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value));
    setSearchParams({ ...Object.fromEntries(searchParams), page: DEFAULT_PAGE});
  };

  const handlePageChange = (page) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page });
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
        currentPage={currentPage}
        setPage={handlePageChange}
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default ProductList;
