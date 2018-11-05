// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
import { Error, IErrorProps } from "../index";

describe("behaviour test for Error component", () => {
  it("Error component should render header with text:Server Error", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const errorProps = {
      clearServerError: {},
      errorMessage: "",
    } as IErrorProps;

    const errorComponent = shallow<Error, IErrorProps>(<Error {...errorProps} />);
    const header = errorComponent.find(".error__header");

    expect(header.text())
      .toBe("Server Error");
  });
});
