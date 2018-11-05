import { IAppState } from "../index";

export const selectServerErrorStatus = (state: IAppState): boolean =>
  state.fetchingState.hasServerError;
