import axios, { AxiosError, AxiosResponse } from 'axios';

import { INewsByGuidResponse, INewsResponse } from './models';

/**
 * A function for getting a list of first 10 news.
 */
export async function getNews(): Promise<INewsResponse> {
  return await axios
    .post('/api/news/getnews', {})
    .then((response: AxiosResponse<INewsResponse>) => response.data)
    .catch((error: AxiosError) => {
      console.error(`Error fetching a list of news: ${error.message}`);
      throw error;
    });
}

/**
 * A function for obtaining news with the given guid.
 */
export async function getNewsByGuid(guid: string): Promise<INewsByGuidResponse> {
  return await axios
    .get('/api/news/getnewsbyguid', { params: { guid } })
    .then((response: AxiosResponse<INewsByGuidResponse>) => response.data)
    .catch((error: AxiosError) => {
      console.error(`Error fetching a list of news: ${error.message}`);
      throw error;
    });
}
