export function fetchCategoriesMain() {
    return fetch("https://kaaryar-ecom.liara.run/v1/categories")
      .then((response) => response.json())
      .catch((error) => {
        throw new Error("Error fetching categories: " + error.message);
      });
  }