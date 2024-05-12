import axios from 'axios';

const API_KEY = 'bf36a75abb0d4e639e920c2b3178403e'; // TODO: Do it secret key
const BASE_URL = 'https://newsapi.org/v2';

export const getNewsSources = () => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/top-headlines/sources`,
    params: {
      apiKey: API_KEY
    }
  }).then(response => {
    return response.data;
  });
};

export const getNewsTopHeadlines = (sourceId: string) => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/top-headlines`,
    params: {
      sources: sourceId,
      apiKey: API_KEY
    }
  }).then(response => {
    return response.data;
  });
};