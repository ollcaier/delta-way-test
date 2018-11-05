import { IAppState } from "../index";

export const selectErrorMessage = (state: IAppState): string =>
  state.fetchingState.errorMessage;
