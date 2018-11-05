import * as React from "react";
import { TClearServerError } from "../app/container";
import styles from "./styles.scss";

export interface IErrorProps {
  errorMessage: string;
  clearServerError: TClearServerError;
}

export class Error extends React.Component<IErrorProps> {
  private timer: number | undefined;

  public componentDidMount() {
    const SERVER_ERROR_KEEPALIVE = 3000;
    this.timer = window.setTimeout(
      this.clickOnError,
      SERVER_ERROR_KEEPALIVE,
    );
  }

  public render() {
    const { errorMessage } = this.props;

    return (
      <div
        onClick={this.clickOnError}
        className={styles["error"]}
      >
        <p className={styles["error__header"]}>Server Error</p>
        <p className={styles["error__message"]}>{errorMessage}</p>
      </div>
    );
  }

  public componentWillUnmount() {
    this.clearTimer();
  }

  private readonly clickOnError = () => {
    const { clearServerError } = this.props;

    this.clearTimer();
    clearServerError();
  }

  private readonly clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
