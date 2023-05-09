import axios from 'axios';
import { FEEDBACK_DATA } from './mock-feedback';

export const getFeedbackById = async (location) => {
  const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/feedback/${location}`);
  return data;
  // return data.items;
};

export const postFeedback = async (fb) => {
  console.log(fb);
  await axios.post(`${process.env.REACT_APP_API_BASE_URL}/feedback`, fb)
}