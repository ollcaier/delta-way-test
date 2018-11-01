import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "./components/app/container";
import { store } from "./store";

const root = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(
  root,
  document.getElementById("root"),
);
