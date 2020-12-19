import axios, { AxiosResponse, AxiosError } from "axios";
import { INewsResponse, INewsByGuidResponse } from "./models";

/**
 * A function for getting a list of first 10 news.
 */
export async function getNews(): Promise<INewsResponse> {
  return await axios
    .post("/api/news/getnews", {})
    .then(function (response: AxiosResponse<INewsResponse>) {
      return response.data;
    })
    .catch(function (error: AxiosError) {
      console.error(`Error fetching a list of news: ${error.message}`);
      throw error;
    });
}

/**
 * A function for obtaining news with the given guid.
 */
export async function getNewsByGuid(guid: string): Promise<INewsByGuidResponse> {
  return await axios
    .get("/api/news/getnewsbyguid", { params: { guid: guid } })
    .then(function (response: AxiosResponse<INewsByGuidResponse>) {
      return response.data;
    })
    .catch(function (error: AxiosError) {
      console.error(`Error fetching a list of news: ${error.message}`);
      throw error;
    });
}
