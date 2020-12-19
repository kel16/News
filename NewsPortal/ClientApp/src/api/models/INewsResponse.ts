import { INews } from 'types/INews';

/**
 * Interface for fetching a list of news.
 */
export interface INewsResponse {
  success: boolean;
  data: INews[];
}
