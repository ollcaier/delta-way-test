import * as React from "react";
import { IEvent } from "../../models/iEvent";
import { getFormedDateFromDatestring } from "../../utils/getFormedDateFromDatestring";
import styles from "./styles.scss";

export interface IEventProps {
  event?: IEvent;
}

export class Event extends React.Component<IEventProps> {
  public render() {
    const { event } = this.props;

    return event === undefined
      ? this.renderEventPreview()
      : this.renderEvent(event);
  }

  private readonly renderEvent = (event: IEvent) =>
    (
      <a
        href={event.url}
        target="_blank"
        className={styles["event"]}
      >
        <h3 className={styles["event__header"]}>{ event.venue.name }</h3>
        <p className={styles["event__location"]}>{ `${event.venue.city}, ${event.venue.country}` }</p>
        <p className={styles["event__date"]}>{ getFormedDateFromDatestring(event.datetime) }</p>
      </a>
    )

  private readonly renderEventPreview = () =>
    <div className={styles["event-preview"]}/>
}
