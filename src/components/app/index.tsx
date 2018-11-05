import * as React from "react";
import { Artist } from "../artist";
import { Error } from "../error";
import { EventList } from "../event-list";
import { SearchContainer } from "../search/container";
import { IMapDispatchToAppProps, IMapStateToAppProps } from "./container";
import styles from "./styles.scss";

type TAppProps = IMapStateToAppProps & IMapDispatchToAppProps;

export class App extends React.Component<TAppProps> {
  public render() {
    const {
      artist,
      events,
      errorMessage,
      hasServerError,
      clearServerError,
    } = this.props;

    return (
      <div className={styles["app-container"]}>
        <div className={styles["search-container"]}>
          <SearchContainer/>
        </div>
        <main className={styles["content-container"]}>
          <section className={styles["artist-container"]}>
            <Artist artist={artist} />
          </section>
          <section className={styles["events-container"]}>
            <EventList
              artist={artist}
              events={events}
            />
          </section>
        </main>
        <aside className={styles["error-container"]}>
          {
            hasServerError &&
            <Error
              errorMessage={errorMessage}
              clearServerError={clearServerError}
            />
          }
        </aside>
      </div>
    );
  }
}
