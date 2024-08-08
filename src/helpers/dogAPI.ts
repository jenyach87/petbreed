import { API } from "./api";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_DOG ;

export async function getRandomDogData(limit: number) {
	console.log(API.getData.dog)
  try {
    const response = await fetch(`${API.getData.dog}?limit=${limit}&api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch dog images');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
