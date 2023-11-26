import axios from 'axios';

const API_KEY = 'dIP_Ak0WJKRmgNFs3yQFLIQ98i7uVQWg7QxlhiWBQ4w'; 

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query,
        per_page: 10, 
        client_id: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};