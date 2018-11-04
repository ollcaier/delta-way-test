import * as React from "react";
import { SearchContainer } from "../search/container";
import { IMapStateToAppProps } from "./container";
import styles from "./styles.scss";

type TAppProps = IMapStateToAppProps;

export class App extends React.Component<TAppProps> {
  public render() {
    return (
      <div className={styles["app-container"]}>
        <div className={styles["search-container"]}>
          <SearchContainer/>
        </div>
        <main className={styles["content-container"]}>
          <section className={styles["artist-container"]}/>
          <section className={styles["events-container"]}/>
        </main>
      </div>
    );
  }
}
