import * as React from "react";
import { IMapDispatchToSearchProps } from "./container";
import styles from "./styles.scss";

export type TSearchProps = IMapDispatchToSearchProps;

export interface ISearchState {
  previousArtistName: string;
}

export class Search extends React.Component<TSearchProps, ISearchState> {
  // tslint:disable-next-line:no-null-keyword
  private input: HTMLInputElement | null = null;
  private timer: number | undefined;

  public constructor(props: TSearchProps) {
    super(props);
    this.state = {
      previousArtistName: "",
    };
  }

  public render() {
    return (
      <div className={styles["search"]}>
        <input
          onFocus={this.markInputAsValid}
          onKeyDown={this.onKeyDownOnInput}
          ref={(input) => this.input = input}
          className={styles["search__input"]}
          placeholder="Enter artist name"
          type="text"
        />
        <button
          onClick={this.onSearch}
          className={styles["search__button"]}
        >
          Search
        </button>
      </div>
    );
  }

  private readonly onKeyDownOnInput = (event: React.KeyboardEvent) => {
    const ENTER_KEY_CODE = 13;

    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSearch();
    }
  }

  private readonly onSearch = () => {
    if (this.input !== null && this.input.value.length !== 0) {
      const artistName = this.input.value.toLowerCase();

      if (this.state.previousArtistName !== artistName) {
        this.setState({
          previousArtistName: artistName,
        });

        this.props.onSearch(artistName);
      }
    } else {
      this.markInputAsInvalid();

      const INVALIDATE_TIMEOUT = 3000;
      this.timer = window.setTimeout(this.markInputAsValid, INVALIDATE_TIMEOUT);
    }
  }

  private readonly markInputAsValid = () => {
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
    }
    if (this.input !== null) {
      this.input.classList.remove(styles["search__input_invalid"]);
    }
  }

  private readonly markInputAsInvalid = () => {
    if (this.input !== null) {
      this.input.classList.add(styles["search__input_invalid"]);
    }
  }
}
