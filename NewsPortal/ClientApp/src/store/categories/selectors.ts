import { createSelector } from "reselect";
import { IRootState } from "../index";

export const getCategoriesSelector = (state: IRootState) => state.categories;

export const getCategoriesLoadingSelector = createSelector(
  getCategoriesSelector,
  ({ isLoading }) => isLoading
);

export const getSubcategoriesSelector = createSelector(
  getCategoriesSelector,
  ({ categories }) => categories
);
