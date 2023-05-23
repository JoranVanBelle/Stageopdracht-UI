import axios from "axios";

export const getLatLonLocation = async (location) => {
  const { data } = await axios.request({
    method: "GET",
    url: `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${location}&countryFilter=BE&apiKey=${process.env.REACT_APP_PTV_API_TOKEN}`
  })
  return [data.locations[0].referencePosition.latitude, data.locations[0].referencePosition.longitude];
}