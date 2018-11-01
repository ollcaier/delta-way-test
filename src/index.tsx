import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/app";
import { store } from "./store";

const root = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(
  root,
  document.getElementById("root"),
);
