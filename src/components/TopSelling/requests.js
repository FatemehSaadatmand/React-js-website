
export function fetchTopSellingProducts() {
    return fetch("https://kaaryar-ecom.liara.run/v1/products/top-rated")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
  }