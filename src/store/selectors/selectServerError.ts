import { IAppState } from "../index";

export const selectServerError = (state: IAppState): boolean =>
  state.fetchingState.hasServerError;
