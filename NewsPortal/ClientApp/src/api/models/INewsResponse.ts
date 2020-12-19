import { INews } from "types/INews";

/**
 * Interface for fetching a list of news.
 */
export interface INewsResponse {
  success: boolean;
  data: INews[];
}

/**
 * Interface for fetching a list of news.
 */
export interface INewsByGuidResponse {
  success: boolean;
  data: INews;
}