import { IEvent } from "../../models/iEvent";
import { ISetFetchingToSuccess, SET_FETCHING_TO_SUCCESS } from "../actions/setFetchingToSuccess";

export interface IEventsState {
  events: IEvent[];
}

const initialEventsState: IEventsState = {
  events: [],
};

type TEventsAction = ISetFetchingToSuccess;

export const eventsReducer = (state = initialEventsState, action: TEventsAction) => {
  switch (action.type) {
    case SET_FETCHING_TO_SUCCESS:
      return {
        ...state,
        events: action.payload.events,
      };
    default:
      return state;
  }
};
