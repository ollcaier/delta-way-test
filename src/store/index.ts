import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { IArtistState } from "./reducers/artistReducer";
import { IEventsState } from "./reducers/eventsReducer";
import { IFetchingState } from "./reducers/fetchingReducer";

export interface IAppState {
  artistState: IArtistState;
  eventsState: IEventsState;
  fetchingState: IFetchingState;
}

export const store = createStore(
  reducers,
  applyMiddleware(thunk),
);
