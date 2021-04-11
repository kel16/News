import { ICategoriesResponse } from "./models";

const fakeCategories: ICategoriesResponse[] = [
  {
    id: "1",
    title: "Science",
    subcategories: [
      {
        id: "1",
        title: "Space",
      },
      {
        id: "2",
        title: "Biology",
      },
      {
        id: "3",
        title: "Chemistry",
      },
      {
        id: "4",
        title: "Mathematics",
      },
    ],
  },
  {
    id: "2",
    title: "Technology",
    subcategories: [
      {
        id: "1",
        title: "Web",
      },
      {
        id: "2",
        title: "Mobile",
      },
      {
        id: "3",
        title: "Machine Learning",
      },
    ],
  },
  {
    id: "3",
    title: "Entertainment",
    subcategories: [
      {
        id: "1",
        title: "Video Games",
      },
      {
        id: "2",
        title: "Movies",
      },
      {
        id: "3",
        title: "Books",
      },
    ],
  },
  { id: "4", title: "Other", subcategories: [] },
];

/**
 * A function for getting a list of categories.
 */
export async function getCategories(): Promise<ICategoriesResponse[]> {
  return fakeCategories;
}
