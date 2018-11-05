import { SET_FETCHING_TO_CLEAR } from "../actions/setFetchingToClear";
import { ISetFetchingToFailed, SET_FETCHING_TO_FAILED } from "../actions/setFetchingToFailed";
import { SET_FETCHING_TO_STARTED } from "../actions/setFetchingToStarted";
import { ISetFetchingToSuccess, SET_FETCHING_TO_SUCCESS } from "../actions/setFetchingToSuccess";

export interface IFetchingState {
  errorMessage: string;
  hasServerError: boolean;
  isFetching: boolean;
}

const initialFetchingState: IFetchingState = {
  errorMessage: "",
  hasServerError: false,
  isFetching: false,
};

type TFetchingAction = ISetFetchingToSuccess & ISetFetchingToFailed;

export const fetchingReducer = (state = initialFetchingState, action: TFetchingAction) => {
  switch (action.type) {
    case SET_FETCHING_TO_STARTED:
      return {
        ...state,
        hasServerError: false,
        isFetching: true,
      };
    case SET_FETCHING_TO_SUCCESS:
      return {
        ...state,
        hasServerError: false,
        isFetching: false,
      };
    case SET_FETCHING_TO_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
        hasServerError: true,
        isFetching: false,
      };
    case SET_FETCHING_TO_CLEAR:
      return {
        ...state,
        hasServerError: false,
      };
    default:
      return state;
  }
};
