import axios from 'axios';
import { FEEDBACK_DATA } from './mock-feedback';

const baseUrl = `http://localhost:1083/feedback`;

export const getFeedbackById = async (location) => {
  // const {data} = await axios.get(`${baseUrl}/${location}`);
  const data = FEEDBACK_DATA;
  return data;
  // return data.items;
};

export const postFeedback = async (fb) => {

  console.log(fb)

  // await axios.post({url:`${baseUrl}`,
  //                   data: fb
// })
}