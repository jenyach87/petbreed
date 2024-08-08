import { API } from "./api";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_CAT;

export async function getRandomCatImages(limit = 1) {
  try {
    const response = await fetch(`${API.getData.cat}?limit=${limit}&api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch dog images');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
