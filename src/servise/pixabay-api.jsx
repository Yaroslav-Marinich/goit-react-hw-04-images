import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '34665236-4ec5151bb97db3fa4ba359d90';

export const fetchGallery = async (name, page) => {
  const params = {
    key: API_KEY,
    q: name,
    page,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  };

  const response = await axios(API_URL, { params });
  return response.data.hits;
};

fetchGallery();
