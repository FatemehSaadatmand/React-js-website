export function fetchCategoriesMain() {
    return fetch("https://kaaryar-ecom.liara.run/v1/categories")
      .then((response) => response.json())
  }