import { IEvent } from "../models/iEvent";
import { getFormedDateFromDatestring } from "../utils/getFormedDateFromDatestring";
import { baseFetch } from "./baseFetch";

export const fetchEvents = async (artistName: string): Promise<IEvent[]> => {
  try {
    const events = await baseFetch(`artists/${artistName}/events`);

    // tslint:disable-next-line:no-any
    return Promise.resolve(events.map((event: any) => ({
      datetime: getFormedDateFromDatestring(event.datetime),
      id: event.id,
      url: event.url,
      venue: {
        city: event.venue.city,
        country: event.venue.country,
        name: event.venue.name,
      },
    })));
  } catch (e) {
    throw e;
  }
};
