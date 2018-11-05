import * as React from "react";
import { IArtist } from "../../models/iArtist";
import { IEvent } from "../../models/iEvent";
import { Event } from "../event";
import styles from "./styles.scss";

export interface IEventListProps {
  artist: IArtist | undefined;
  events: IEvent[];
}

export class EventList extends React.Component<IEventListProps> {
  public render() {
    return (
      <div className={styles["event-list"]}>
        {
          this.shouldRenderPreview()
            ? <div className={styles["event-list__header-preview"]}/>
            : <h2 className={styles["event-list__header"]}>{ this.getHeader() }</h2>
        }
        {
          this.renderEvents()
        }
      </div>
    );
  }

  private readonly renderEvents = () => {
    const { events } = this.props;

    if (this.shouldRenderPreview()) {
      return (
        <div className={styles["event-list__container"]}>
          {
            // tslint:disable-next-line:no-magic-numbers
            [1, 2].map((index: number) =>
              <Event
                key={index}
              />,
            )
          }
        </div>
      );
    }

    return (
      <div className={styles["event-list__container"]}>
        {
          events.map((event: IEvent) =>
            <Event
              key={event.id}
              event={event}
            />,
          )
        }
      </div>
    );
  }

  private readonly getHeader = (): string => {
    const {
      artist,
      events,
    } = this.props;

    if (this.shouldRenderPreview()) {
      return "";
    }

    if (artist !== undefined) {
      return events.length
        ? `${artist.name}'s events:`
        : `${artist.name} has no events :(`;
    }

    return "";
  }

  private readonly shouldRenderPreview = (): boolean => {
    const { artist } = this.props;

    return artist === undefined;
  }
}
