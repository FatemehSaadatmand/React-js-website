

export function fetchProductListData({ currentPage, productsPerPage, selectedCategory, searchQuery }) {
    let url = "https://kaaryar-ecom.liara.run/v1/products";
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
  }
  