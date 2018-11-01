import { IVenue } from "./iVenue";

export interface IEvent {
  datetime: string;
  id: number;
  url: string;
  venue: IVenue;
}
