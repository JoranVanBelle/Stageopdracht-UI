import axios from 'axios';

export const getDistance = async ([origin, destination]) => {
  const {data} = await axios.request({
    method: 'GET',
    url:`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&mode=driving&departure_time=now&key=Xq36KBXDxC3j37je9wz0QJ6nhPsY6`
  });
  return data;
}