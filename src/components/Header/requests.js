import { PRODUCTS_BY_CATEGORY_URL } from "../../configs/urls";

export function fetchCategoriesHeader() {
    return fetch(PRODUCTS_BY_CATEGORY_URL)
      .then((response) => response.json())
  }