import axios from 'axios';

export const subscribe = async (sub) => {
  
  await axios.post(`${process.env.REACT_APP_API_BASE_URL}/subscription/subscribe`,sub)
}

export const signout = async (signout) => {

  await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/subscription/signout`, signout)
}