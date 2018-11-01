import { IAppState } from "../index";

export const selectFetchingStatus = (state: IAppState): boolean =>
  state.fetchingState.isFetching;
