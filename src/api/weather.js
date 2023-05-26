import axios from '.';

export const getAll = async () => {
  const {data} = await axios.get(`/weather`);
  return data;
};