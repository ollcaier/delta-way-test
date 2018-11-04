// tslint:disable-next-line:no-implicit-dependencies
import { mount, shallow } from "enzyme";
import * as React from "react";
import { IMapDispatchToSearchProps } from "../container";
import { ISearchState, Search, TSearchProps } from "../index";

describe("behaviour test for Search component", () => {
  it("Search component should initialized with expected state", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: {},
    } as IMapDispatchToSearchProps;

    const searchComponent = shallow<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);
    const expectedInitialState = {
      previousArtistName: "",
    };

    expect(searchComponent.state())
      .toEqual(expectedInitialState);
  });

  it("Search component should mark empty input as invalid after click on button", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: {},
    } as IMapDispatchToSearchProps;

    const searchComponent = mount<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);

    const getSearchInput = () => searchComponent.find(".search__input");
    const getSearchButton = () => searchComponent.find(".search__button");

    (getSearchInput()
    // tslint:disable-next-line:no-any
      .instance() as any)
      .value = "";

    getSearchButton()
      .simulate("click");
    searchComponent.update();

    expect(
      getSearchInput()
        .render()
        .hasClass("search__input_invalid"),
    )
      .toBe(true);
  });

  it("Search component should mark empty input as invalid after press Enter", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: {},
    } as IMapDispatchToSearchProps;

    const searchComponent = mount<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);

    const getSearchInput = () => searchComponent.find(".search__input");

    (getSearchInput()
    // tslint:disable-next-line:no-any
      .instance() as any)
      .value = "";

    getSearchInput()
      .simulate("keyDown", {
        keyCode: 13,
      });
    searchComponent.update();

    expect(
      getSearchInput()
        .render()
        .hasClass("search__input_invalid"),
    )
      .toBe(true);
  });

  it("Search component should set previous artist name to state in lowercase after click on button", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: () => undefined,
    } as IMapDispatchToSearchProps;

    const searchComponent = mount<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);

    const getSearchInput = () => searchComponent.find(".search__input");
    const getSearchButton = () => searchComponent.find(".search__button");

    (getSearchInput()
    // tslint:disable-next-line:no-any
      .instance() as any)
      .value = "StiNg";

    const expectedPreviousArtistName = "sting";

    getSearchButton()
      .simulate("click");
    searchComponent.update();

    expect(searchComponent.state().previousArtistName)
      .toBe(expectedPreviousArtistName);
  });

  it("Search component should set previous artist name to state in lowercase after press Enter", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: () => undefined,
    } as IMapDispatchToSearchProps;

    const searchComponent = mount<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);

    const getSearchInput = () => searchComponent.find(".search__input");

    const expectedPreviousArtistName = "sting";

    (getSearchInput()
    // tslint:disable-next-line:no-any
      .instance() as any)
      .value = "StiNg";

    getSearchInput()
      .simulate("keyDown", {
        keyCode: 13,
      });
    searchComponent.update();

    expect(searchComponent.state().previousArtistName)
      .toBe(expectedPreviousArtistName);
  });

  it("Search component should invalidate input after 3000ms", () => {
// tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: {},
    } as IMapDispatchToSearchProps;

    const searchComponent = mount<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);

    const getSearchInput = () => searchComponent.find(".search__input");
    const getSearchButton = () => searchComponent.find(".search__button");

    const INVALIDATE_TIMEOUT = 50;

    (getSearchInput()
    // tslint:disable-next-line:no-any
      .instance() as any)
      .value = "";

    getSearchButton()
      .simulate("click");
    searchComponent.update();

    setTimeout(() => {
      expect(
        getSearchInput()
          .render()
          .hasClass("search__input_invalid"),
      )
        .toBe(false);

      searchComponent.unmount();
      // tslint:disable-next-line:align
    }, INVALIDATE_TIMEOUT);
  });
});
