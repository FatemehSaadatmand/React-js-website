import { PRODUCTS_URL } from "../configs/urls";
export function fetchProductDetails (id) {
    return fetch(`${PRODUCTS_URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      return response.json();
    })
}