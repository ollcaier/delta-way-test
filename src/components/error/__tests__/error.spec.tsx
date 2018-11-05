// tslint:disable-next-line:no-implicit-dependencies
import { shallow } from "enzyme";
import * as React from "react";
import { Error, IErrorProps } from "../index";

describe("behaviour test for Error component", () => {
  it("Error component should render expected error message", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const errorProps = {
      clearServerError: {},
      errorMessage: "Nothing found",
    } as IErrorProps;

    const errorComponent = shallow<Error, IErrorProps>(<Error {...errorProps} />);
    const message = errorComponent.find(".error__message");

    expect(message.text())
      .toBe("Nothing found");
  });
});
