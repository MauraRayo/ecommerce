import { API_URL } from "../utils/constants";

export async function getProducts() {
  try {
    const response = await fetch(
      `${API_URL}/api/products?populate=*&sort=createdAt%3Adesc&pagination`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductscategory(category) {
  try {
    const response = await fetch(
      `${API_URL}/api/products?_where[category.slug]=${category}&sort=createdAt%3Adesc`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
