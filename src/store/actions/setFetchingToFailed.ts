import { Action } from "redux";

export const SET_FETCHING_TO_FAILED = "SET_FETCHING_TO_FAILED";

export const setFetchingToFailed = (): Action =>
  ({
    type: SET_FETCHING_TO_FAILED,
  });
