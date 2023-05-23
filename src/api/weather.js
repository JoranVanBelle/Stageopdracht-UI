import axios from 'axios';

export const getAll = async () => {
  const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/weather`);
  return data;
};