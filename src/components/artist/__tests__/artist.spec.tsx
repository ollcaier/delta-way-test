// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
import { Artist, IArtistProps } from "../index";

describe("behaviour test for Artist component", () => {
  it("Artist component without data should show name preview", () => {
    const artistProps: IArtistProps = {
      artist: undefined,
    };

    const artistComponent = shallow<Artist, IArtistProps>(<Artist {...artistProps} />);
    const namePreview = artistComponent.find(".artist__name-preview");

    expect(namePreview.exists())
      .toBe(true);
  });

  it("Artist component without data should show image preview", () => {
    const artistProps: IArtistProps = {
      artist: undefined,
    };

    const artistComponent = shallow<Artist, IArtistProps>(<Artist {...artistProps} />);
    const imagePreview = artistComponent.find(".artist__image-preview");

    expect(imagePreview.exists())
      .toBe(true);
  });

  it("Artist component without data should show facebook link preview", () => {
    const artistProps: IArtistProps = {
      artist: undefined,
    };

    const artistComponent = shallow<Artist, IArtistProps>(<Artist {...artistProps} />);
    const facebookLinkPreview = artistComponent.find(".artist__facebook-link-preview");

    expect(facebookLinkPreview.exists())
      .toBe(true);
  });

  it("Artist component should show name", () => {
    const artistProps: IArtistProps = {
      artist: {
        facebookPageUrl: "facebookPageUrl",
        imageUrl: "imageUrl",
        name: "name",
      },
    };

    const artistComponent = shallow<Artist, IArtistProps>(<Artist {...artistProps} />);
    const name = artistComponent.find(".artist__name");

    expect(name.text())
      .toBe("name");
  });

  it("Artist component should show image", () => {
    const artistProps: IArtistProps = {
      artist: {
        facebookPageUrl: "facebookPageUrl",
        imageUrl: "imageUrl",
        name: "name",
      },
    };

    const artistComponent = shallow<Artist, IArtistProps>(<Artist {...artistProps} />);
    const image = artistComponent.find(".artist__image");

    expect(image.prop("src"))
      .toBe("imageUrl");
  });

  it("Artist component should show facebook link", () => {
    const artistProps: IArtistProps = {
      artist: {
        facebookPageUrl: "facebookPageUrl",
        imageUrl: "imageUrl",
        name: "name",
      },
    };

    const artistComponent = shallow<Artist, IArtistProps>(<Artist {...artistProps} />);
    const facebookLink = artistComponent.find(".artist__facebook-link");

    expect(facebookLink.prop("href"))
      .toBe("facebookPageUrl");
  });

  it("Artist component should not show empty facebook link", () => {
    const artistProps: IArtistProps = {
      artist: {
        facebookPageUrl: "",
        imageUrl: "imageUrl",
        name: "name",
      },
    };

    const artistComponent = shallow<Artist, IArtistProps>(<Artist {...artistProps} />);
    const facebookLink = artistComponent.find(".artist__facebook-link");

    expect(facebookLink.exists())
      .toBe(false);
  });
});
