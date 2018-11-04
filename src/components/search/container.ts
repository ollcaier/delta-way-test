import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "../../store";
import {
  fetchArtistData,
  TFetchArtistAction,
} from "../../store/asyncActions/fetchArtistDataTyping";
import { Search } from "./index";

type TOnSearch = (artistName: string) => void;

export interface IMapDispatchToSearchProps {
  onSearch: TOnSearch;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, TFetchArtistAction>): IMapDispatchToSearchProps =>
  ({
    onSearch: (artistName: string): void => { dispatch(fetchArtistData(artistName)); },
  });

// tslint:disable-next-line:variable-name
export const SearchContainer = connect(undefined, mapDispatchToProps)(Search);
