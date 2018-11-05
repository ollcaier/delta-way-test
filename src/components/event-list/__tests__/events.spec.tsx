// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
import { EventList, IEventListProps } from "../index";

describe("behaviour test for EventList component", () => {
  it("EventList component without data should render preview header", () => {
    const eventsProps: IEventListProps = {
      artist: undefined,
      events: [],
    };

    const eventsComponent = shallow<EventList, IEventListProps>(<EventList {...eventsProps} />);
    const headerPreview = eventsComponent.find(".event-list__header-preview");

    expect(headerPreview.exists())
      .toBe(true);
  });

  it("EventList component should render expected header without event-list", () => {
    const eventsProps: IEventListProps = {
      artist: {
        facebookPageUrl: "facebookPageUrl",
        imageUrl: "imageUrl",
        name: "name",
      },
      events: [],
    };

    const eventsComponent = shallow<EventList, IEventListProps>(<EventList {...eventsProps} />);
    const headerPreview = eventsComponent.find(".event-list__header");

    expect(headerPreview.text())
      .toBe("name has no events :(");
  });

  it("EventList component should render expected header", () => {
    const eventsProps: IEventListProps = {
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

    const eventsComponent = shallow<EventList, IEventListProps>(<EventList {...eventsProps} />);
    const headerPreview = eventsComponent.find(".event-list__header");

    expect(headerPreview.text())
      .toBe("name's events:");
  });
});
