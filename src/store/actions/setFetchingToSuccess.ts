import { Action } from "redux";
import { IArtist } from "../../models/iArtist";
import { IEvent } from "../../models/iEvent";

export interface ISetFetchingToSuccessPayload {
  artist: IArtist;
  events: IEvent[];
}

export interface ISetFetchingToSuccess extends Action {
  payload: ISetFetchingToSuccessPayload;
}

export const SET_FETCHING_TO_SUCCESS = "SET_FETCHING_TO_SUCCESS";

export const setFetchingToSuccess = (artist: IArtist, events: IEvent[]): ISetFetchingToSuccess =>
  ({
    payload: {
      artist,
      events,
    },
    type: SET_FETCHING_TO_SUCCESS,
  });
