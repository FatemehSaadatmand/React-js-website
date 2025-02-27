import React, { useState, useEffect } from "react";
import { fetchTopSellingProducts } from "./requests"; 
import "./TopSelling.css";

const TopSelling = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTopSellingProducts();
        setTopProducts(data.slice(0, 3)); 
        setIsLoading(false);
      } catch (err) {
        setError(`Failed to fetch top-rated products: ${err.message}`);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="top-selling">
      <h3 className="top-sell-title">TOP SELLING</h3>
      <div className="top-selling-grid">
        {topProducts.map((product) => (
          <div key={product._id} className="top-selling-card">
            <img
              src={product.images[0]}  
              alt={product.name}
              className="top-selling-image"
            />
            <div className="top-selling-detail">
                <p className="top-selling-category">{product.category.name}</p>
                <h4 className="top-selling-name">{product.name}</h4>
                <p className="top-selling-price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
