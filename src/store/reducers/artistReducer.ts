import { IArtist } from "../../models/iArtist";
import { ISetFetchingToSuccess, SET_FETCHING_TO_SUCCESS } from "../actions/setFetchingToSuccess";

export interface IArtistState {
  artist: IArtist | undefined;
}

const initialArtistState: IArtistState = {
  artist: undefined,
};

type TArtistAction = ISetFetchingToSuccess;

export const artistReducer = (state = initialArtistState, action: TArtistAction) => {
  switch (action.type) {
    case SET_FETCHING_TO_SUCCESS:
      return {
        ...state,
        artist: action.payload.artist,
      };
    default:
      return state;
  }
};
