import { PRODUCTS_TOP_RATED_URL } from "../../configs/urls";

export function fetchTopSellingProducts() {
    return fetch(`${PRODUCTS_TOP_RATED_URL}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
  }