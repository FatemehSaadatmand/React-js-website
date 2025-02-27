import { PRODUCTS_BY_CATEGORY_URL } from "../../configs/urls";

export function fetchCategoriesHeader() {
    return fetch(`${PRODUCTS_BY_CATEGORY_URL}`)
      .then((response) => response.json())
      .catch((error) => {
        throw new Error("Error fetching categories: " + error.message);
      });
  }