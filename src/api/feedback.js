import axios from '.';

export const getFeedbackById = async (location) => {
  const {data} = await axios.get(`/feedback/${location}`);
  return data;
};

export const postFeedback = async (fb) => {
  await axios.post(`/feedback`, fb)
}