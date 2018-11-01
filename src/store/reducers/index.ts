import { combineReducers } from "redux";
import { artistReducer } from "./artistReducer";
import { eventsReducer } from "./eventsReducer";
import { fetchingReducer } from "./fetchingReducer";

export const reducers = combineReducers({
  artistState: artistReducer,
  eventsState: eventsReducer,
  fetchingState: fetchingReducer,
});
