import axios from '.';

export const subscribe = async (sub) => {
  await axios.post(`/subscription/subscribe`,sub)
}

export const signout = async (signout) => {

  await axios.delete(`/subscription/signout`, {data: signout})
}