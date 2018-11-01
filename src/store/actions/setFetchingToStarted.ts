import { Action } from "redux";

export const SET_FETCHING_TO_STARTED = "SET_FETCHING_TO_STARTED";

export const setFetchingToStarted = (): Action =>
  ({
    type: SET_FETCHING_TO_STARTED,
  });
