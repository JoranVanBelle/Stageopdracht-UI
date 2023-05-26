import axios from '.';

export const getDistance = async ([origin, destination]) => {
  const {data} = await axios.request({
    method: 'GET',
    url: `/distancematrix/${origin}/${destination}`,
    data:{"url": `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&mode=driving&departure_time=now&key=`}
  });
  return data;
}