
import { PRODUCTS_URL } from "../../configs/urls";
export function fetchProductListData({ currentPage, productsPerPage, selectedCategory, searchQuery }) {
    let url = PRODUCTS_URL;
    const params = {
      page: currentPage,
      limit: productsPerPage,
    };
  
    if (selectedCategory && selectedCategory !== "All Categories") {
      params.category = selectedCategory;
    }
  
    if (searchQuery) {
      params.search = searchQuery;
    }
  
    url += "?" + new URLSearchParams(params).toString();
  
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return {
          products: data.products || [],
          totalItems: data.pagination.totalItems || 0,
        };
      })
      .catch(() => {
        throw new Error("Failed to fetch products");
      });
  }
  