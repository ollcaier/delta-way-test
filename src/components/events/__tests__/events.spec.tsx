// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
import { Events, IEventsProps } from "../index";

describe("behaviour test for Events component", () => {
  it("Events component without data should render preview header", () => {
    const eventsProps: IEventsProps = {
      artist: undefined,
      events: [],
    };

    const eventsComponent = shallow<Events, IEventsProps>(<Events {...eventsProps} />);
    const headerPreview = eventsComponent.find(".events__header-preview");

    expect(headerPreview.exists())
      .toBe(true);
  });

  it("Events component should render expected header without events", () => {
    const eventsProps: IEventsProps = {
      artist: {
        facebookPageUrl: "facebookPageUrl",
        imageUrl: "imageUrl",
        name: "name",
      },
      events: [],
    };

    const eventsComponent = shallow<Events, IEventsProps>(<Events {...eventsProps} />);
    const headerPreview = eventsComponent.find(".events__header");

    expect(headerPreview.text())
      .toBe("name has no events :(");
  });

  it("Events component should render expected header", () => {
    const eventsProps: IEventsProps = {
      artist: {
        facebookPageUrl: "facebookPageUrl",
        imageUrl: "imageUrl",
        name: "name",
      },
      events: [
        {
          datetime: "",
          id: 1,
          url: "",
          venue: {
            city: "",
            country: "",
            name: "",
          },
        },
      ],
    };

    const eventsComponent = shallow<Events, IEventsProps>(<Events {...eventsProps} />);
    const headerPreview = eventsComponent.find(".events__header");

    expect(headerPreview.text())
      .toBe("name's events:");
  });
});
