import { connect } from "react-redux";
import { IArtist } from "../../models/iArtist";
import { IEvent } from "../../models/iEvent";
import { IAppState } from "../../store";
import { selectArtist } from "../../store/selectors/selectArtist";
import { selectEvents } from "../../store/selectors/selectEvents";
import { selectFetchingStatus } from "../../store/selectors/selectFetchingStatus";
import { App } from "./index";

export interface IMapStateToAppProps {
  artist: IArtist | undefined;
  events: IEvent[];
  isFetching: boolean;
}

export const mapStateToAppProps = (state: IAppState): IMapStateToAppProps =>
    ({
      artist: selectArtist(state),
      events: selectEvents(state),
      isFetching: selectFetchingStatus(state),
    });

// tslint:disable-next-line:variable-name
export const AppContainer = connect(mapStateToAppProps)(App);
