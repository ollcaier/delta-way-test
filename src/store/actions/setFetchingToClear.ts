import { Action } from "redux";

export const SET_FETCHING_TO_CLEAR = "SET_FETCHING_TO_CLEAR";

export const setFetchingToClear = (): Action =>
  ({
    type: SET_FETCHING_TO_CLEAR,
  });
