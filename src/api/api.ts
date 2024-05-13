// api.ts

import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || '/api';

export const getNewsSources = () => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/newsSources`, // Backend'e yönlendirme
  }).then(response => {
    return response.data;
  });
};

export const getNewsTopHeadlines = (sourceId: string) => {
  return axios({
    method: 'GET',
    url: `${BASE_URL}/newsTopHeadlines/${sourceId}`, // Backend'e yönlendirme
  }).then(response => {
    return response.data;
  });
};
