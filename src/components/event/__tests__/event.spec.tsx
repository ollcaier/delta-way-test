// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
import { Event, IEventProps } from "../index";

describe("behaviour test for Event component", () => {
  it("Event component without data should render preview", () => {
    const eventsProps: IEventProps = {
      event: undefined,
    };

    const eventComponent = shallow<Event, IEventProps>(<Event {...eventsProps} />);
    const preview = eventComponent.find(".event-preview");

    expect(preview.exists())
      .toBe(true);
  });

  it("Event component should render expected link", () => {
    const eventsProps: IEventProps = {
      event: {
        datetime: "2018-11-16T20:00:00",
        id: 1,
        url: "url",
        venue: {
          city: "city",
          country: "country",
          name: "header",
        },
      },
    };

    const eventComponent = shallow<Event, IEventProps>(<Event {...eventsProps} />);
    const header = eventComponent.find(".event");

    expect(header.prop("href"))
      .toBe("url");
  });

  it("Event component should render expected header", () => {
    const eventsProps: IEventProps = {
      event: {
        datetime: "2018-11-16T20:00:00",
        id: 1,
        url: "url",
        venue: {
          city: "city",
          country: "country",
          name: "header",
        },
      },
    };

    const eventComponent = shallow<Event, IEventProps>(<Event {...eventsProps} />);
    const header = eventComponent.find(".event__header");

    expect(header.text())
      .toBe("header");
  });

  it("Event component should render expected location", () => {
    const eventsProps: IEventProps = {
      event: {
        datetime: "2018-11-16T20:00:00",
        id: 1,
        url: "url",
        venue: {
          city: "city",
          country: "country",
          name: "header",
        },
      },
    };

    const eventComponent = shallow<Event, IEventProps>(<Event {...eventsProps} />);
    const location = eventComponent.find(".event__location");

    expect(location.text())
      .toBe("city, country");
  });

  it("Event component should render expected date", () => {
    const eventsProps: IEventProps = {
      event: {
        datetime: "2018-11-16T20:00:00",
        id: 1,
        url: "url",
        venue: {
          city: "city",
          country: "country",
          name: "header",
        },
      },
    };

    const eventComponent = shallow<Event, IEventProps>(<Event {...eventsProps} />);
    const date = eventComponent.find(".event__date");

    expect(date.text())
      .toBe("16 November, 2018");
  });
});
