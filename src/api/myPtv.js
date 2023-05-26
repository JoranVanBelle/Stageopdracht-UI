import axios from ".";

export const getLatLonLocation = async (location) => {
  const { data } = await axios.request({
    method: "GET",
    url: `/ptv/${location}`
  })
  
  return [data.locations[0].referencePosition.latitude, data.locations[0].referencePosition.longitude];
}