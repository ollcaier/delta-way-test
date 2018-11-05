import { Action } from "redux";

export const SET_FETCHING_TO_FAILED = "SET_FETCHING_TO_FAILED";

export interface ISetFetchingToFailed extends Action {
  errorMessage: string;
}

export const setFetchingToFailed = (errorMessage: string): ISetFetchingToFailed =>
  ({
    errorMessage,
    type: SET_FETCHING_TO_FAILED,
  });
