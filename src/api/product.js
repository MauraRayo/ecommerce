import { API_URL } from "../utils/constants";

export async function getProducts() {
  try {
    const response = await fetch(
      `${API_URL}/api/products?populate=*&sort=createdAt%3Adesc&pagination`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductsCategory(category) {
  try {
    const response = await fetch(
      `${API_URL}/api/products?populate[category][slug]=${category}&sort=createdAt`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
