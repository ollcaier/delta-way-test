// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
import { IMapDispatchToSearchProps } from "../container";
import { ISearchState, Search, TSearchProps } from "../index";

describe("render test for Search component", () => {
  it("Search component should have input with placeholder:Enter artist name", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: {},
    } as IMapDispatchToSearchProps;

    const searchComponent = shallow<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);
    const searchInput = searchComponent.find(".search__input[placeholder='Enter artist name']");

    expect(searchInput.exists())
      .toBe(true);
  });

  it("Search component should have button", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: {},
    } as IMapDispatchToSearchProps;

    const searchComponent = shallow<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);
    const searchButton = searchComponent.find(".search__button");

    expect(searchButton.exists())
      .toBe(true);
  });

  it("Search component should have button with text:Search", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const searchProps = {
      onSearch: {},
    } as IMapDispatchToSearchProps;

    const searchComponent = shallow<Search, TSearchProps, ISearchState>(<Search {...searchProps} />);
    const searchButton = searchComponent.find(".search__button");

    expect(searchButton.text())
      .toBe("Search");
  });
});
