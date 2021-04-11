import type from "./constants";

export function getCategories() {
  return {
    type: type.GET_CATEGORIES_REQUESTED,
  };
}
