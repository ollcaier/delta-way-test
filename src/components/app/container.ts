import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IArtist } from "../../models/iArtist";
import { IEvent } from "../../models/iEvent";
import { IAppState } from "../../store";
import { setFetchingToClear } from "../../store/actions/setFetchingToClear";
import { selectArtist } from "../../store/selectors/selectArtist";
import { selectErrorMessage } from "../../store/selectors/selectErrorMessage";
import { selectEvents } from "../../store/selectors/selectEvents";
import { selectServerErrorStatus } from "../../store/selectors/selectServerErrorStatus";
import { App } from "./index";

export type TClearServerError = () => void;

export interface IMapStateToAppProps {
  artist: IArtist | undefined;
  events: IEvent[];
  hasServerError: boolean;
  errorMessage: string;
}

export const mapStateToAppProps = (state: IAppState): IMapStateToAppProps =>
  ({
    artist: selectArtist(state),
    errorMessage: selectErrorMessage(state),
    events: selectEvents(state),
    hasServerError: selectServerErrorStatus(state),
  });

export interface IMapDispatchToAppProps {
  clearServerError: TClearServerError;
}

export const mapDispatchToAppProps = (dispatch: Dispatch): IMapDispatchToAppProps =>
  ({
    clearServerError: () => { dispatch(setFetchingToClear()); },
  });

// tslint:disable-next-line:variable-name
export const AppContainer = connect(mapStateToAppProps, mapDispatchToAppProps)(App);
