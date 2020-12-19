import { INews } from 'types/INews';

/**
 * Interface for obtaining news with the given guid.
 */
export interface INewsByGuidResponse {
  success: boolean;
  data: INews;
}
