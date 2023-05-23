import axios from 'axios';

export const getFeedbackById = async (location) => {
  const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/feedback/${location}`);
  return data;
};

export const postFeedback = async (fb) => {
  await axios.post(`${process.env.REACT_APP_API_BASE_URL}/feedback`, fb)
}