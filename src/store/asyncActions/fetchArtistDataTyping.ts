import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchArtist } from "../../requests/fetchArtist";
import { fetchEvents } from "../../requests/fetchEvents";
import { setFetchingToFailed } from "../actions/setFetchingToFailed";
import { setFetchingToStarted } from "../actions/setFetchingToStarted";
import { ISetFetchingToSuccess, setFetchingToSuccess } from "../actions/setFetchingToSuccess";
import { IAppState } from "../index";

export type TFetchArtistAction = Action | ISetFetchingToSuccess;

type TFetchArtistDataResult = (dispatch: ThunkDispatch<IAppState, void, TFetchArtistAction>) => void;

export type TFetchArtistData = (artistName: string) => TFetchArtistDataResult;

export const fetchArtistData: TFetchArtistData = (artistName: string) =>
  async (dispatch: ThunkDispatch<IAppState, void, TFetchArtistAction>): Promise<void> => {
    dispatch(setFetchingToStarted());

    try {
      const [
        artist,
        events,
      ] = await Promise.all([
        fetchArtist(artistName),
        fetchEvents(artistName),
      ]);

      dispatch(setFetchingToSuccess(artist, events));
    } catch (e) {
      dispatch(setFetchingToFailed());
    }
  };
