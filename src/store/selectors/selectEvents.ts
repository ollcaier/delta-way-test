import { IEvent } from "../../models/iEvent";
import { IAppState } from "../index";

export const selectEvents = (state: IAppState): IEvent[] =>
  state.eventsState.events;
