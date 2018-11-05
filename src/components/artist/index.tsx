import * as React from "react";
import { IArtist } from "../../models/iArtist";
import styles from "./styles.scss";

export interface IArtistProps {
  artist: IArtist | undefined;
}

export class Artist extends React.Component<IArtistProps> {
  public render() {
    return (
      <article className={styles["artist"]}>
        <div className={styles["artist__name-container"]}>
          {
            this.shouldRenderPreview()
              ? <div className={styles["artist__name-preview"]} />
              : <h2 className={styles["artist__name"]}>{ this.getArtistName() }</h2>
          }
        </div>
        <div className={styles["artist__image-container"]}>
          {
            this.shouldRenderPreview()
              ? <div className={styles["artist__image-preview"]} />
              : <img
                  className={styles["artist__image"]}
                  src={this.getArtistImage()}
              />
          }
        </div>
        <div className={styles["artist__facebook-link-container"]}>
          {
            this.shouldRenderPreview()
              ? <div className={styles["artist__facebook-link-preview"]} />
              : this.shouldRenderLinkToFacebook() &&
                <a
                  className={styles["artist__facebook-link"]}
                  href={this.getArtistFacebookLink()}
                  target="_blank"
                >
                  { this.getArtistName() } on Facebook
                </a>
          }
        </div>
      </article>
    );
  }

  private readonly getArtistName = (): string => {
    const { artist } = this.props;

    if (artist !== undefined) {
      return artist.name;
    }

    return "";
  }

  private readonly getArtistImage = (): string => {
    const { artist } = this.props;

    if (artist !== undefined) {
      return artist.imageUrl;
    }

    return "";
  }

  private readonly getArtistFacebookLink = (): string => {
    const { artist } = this.props;

    if (artist !== undefined) {
      return artist.facebookPageUrl;
    }

    return "";
  }

  private readonly shouldRenderPreview = (): boolean => {
    const { artist } = this.props;

    return artist === undefined;
  }

  private readonly shouldRenderLinkToFacebook = (): boolean => {
    const { artist } = this.props;

    return artist !== undefined && artist.facebookPageUrl !== "";
  }
}
