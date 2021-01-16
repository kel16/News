import axios, { AxiosError, AxiosResponse } from "axios";
import { INewsByGuidResponse, INewsCountResponse, INewsRequest, INewsResponse } from "./models";

const instance = axios.create();

/**
 * A function for getting total number of news.
 */
export async function getNewsCount(): Promise<INewsCountResponse> {
  return await instance
    .post("/api/news/gettotalcount", {})
    .then((response: AxiosResponse<INewsCountResponse>) => response.data)
    .catch((error: AxiosError) => {
      console.error(`Error getting total number of news: ${error.message}`);
      throw error;
    });
}

/**
 * A function for getting a list of news for the page.
 */
export async function getNews(newsModel: INewsRequest): Promise<INewsResponse> {
  return await instance
    .post(
      "/api/news/getnews",
      {},
      {
        params: newsModel,
      }
    )
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
  return await instance
    .get("/api/news/getnewsbyguid", { params: { guid } })
    .then((response: AxiosResponse<INewsByGuidResponse>) => response.data)
    .catch((error: AxiosError) => {
      console.error(`Error fetching news by guid: ${error.message}`);
      throw error;
    });
}
