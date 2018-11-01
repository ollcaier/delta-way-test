import { IArtist } from "../../models/iArtist";
import { IAppState } from "../index";

export const selectArtist = (state: IAppState): IArtist | undefined =>
  state.artistState.artist;
