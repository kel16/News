import { ICategoryState } from "./types";

export const initialState: ICategoryState = {
  categories: [],
  selected: {},
  isLoading: true,
  error: "",
};
