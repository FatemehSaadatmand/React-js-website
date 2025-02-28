<<<<<<< HEAD:src/ProductPage/requests.js
import { PRODUCTS_URL } from "../configs/urls";

export function fetchProductDetails (id) {
    return fetch(`${PRODUCTS_URL}/${id}`)
=======
export function fetchProductDetails (id) {
    return fetch(`https://kaaryar-ecom.liara.run/v1/products/${id}`)
>>>>>>> 8bed1fa72f2808a68b8ec67ae41b8cc9f748d5dc:src/views/ProductPage/requests.js
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      return response.json();
    })
}