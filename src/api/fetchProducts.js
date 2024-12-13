export const fetchProducts = async () => {
  try {
    const response = await fetch("https://kaaryar-ecom.liara.run/v1/products?page=1&limit=9");
    const data = await response.json();
    return data.products; 
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};