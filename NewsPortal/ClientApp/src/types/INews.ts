/**
 * Interface that describes News entity.
 */
export interface INews {
  /**
   * The news item rendered in MainPage and NewsPage.
   */
  newsGuid: string;
  title: string;
  annotation: string;
  text: string;
  createDate: Date;
  changeDate: Date;
}
