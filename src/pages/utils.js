import axios from 'axios';

const apiKey = 'AIzaSyCTWRcNUHaxZ528vvuNKjScmydyWiGToKU';

export const getSuggestion = (input = {}) => {
  const finalInput = { ...input, key: apiKey };
  const encodedInput = {};
  Object.keys(finalInput).map((par) => encodedInput[par] = encodeURIComponent(finalInput[par]));
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params: encodedInput,
  });
};
