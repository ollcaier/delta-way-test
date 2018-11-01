import * as React from "react";
import { IMapStateToAppProps } from "./container";

type TAppProps = IMapStateToAppProps;

export class App extends React.Component<TAppProps> {
  public render() {
    return (
      <div/>
    );
  }
}
