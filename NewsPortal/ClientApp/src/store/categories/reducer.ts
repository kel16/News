import IAction from "../types";
import type from "./constants";
import { initialState } from "./initialState";

export function categoriesReducer(state = initialState, action: IAction<string[]>) {
  switch (action.type) {
    case type.GET_CATEGORIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case type.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case type.GET_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
