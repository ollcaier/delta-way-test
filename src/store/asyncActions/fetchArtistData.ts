import { Dispatch } from "redux";
import { fetchArtist } from "../../requests/fetchArtist";
import { fetchEvents } from "../../requests/fetchEvents";
import { setFetchingToFailed } from "../actions/setFetchingToFailed";
import { setFetchingToStarted } from "../actions/setFetchingToStarted";
import { setFetchingToSuccess } from "../actions/setFetchingToSuccess";

export type TFetchArtistData = (artistName: string) => (dispatch: Dispatch) => Promise<void>;

export const fetchArtistData: TFetchArtistData = (artistName: string) =>
  async (dispatch) => {
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
