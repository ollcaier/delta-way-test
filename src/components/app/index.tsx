import * as React from "react";
import { Artist } from "../artist";
import { SearchContainer } from "../search/container";
import { IMapStateToAppProps } from "./container";
import styles from "./styles.scss";

type TAppProps = IMapStateToAppProps;

export class App extends React.Component<TAppProps> {
  public render() {
    const {
      artist,
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
          <section className={styles["events-container"]}/>
        </main>
      </div>
    );
  }
}
