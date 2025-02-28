export function fetchProductDetails (id) {
    return fetch(`https://kaaryar-ecom.liara.run/v1/products/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      return response.json();
    })
}