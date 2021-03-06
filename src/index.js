import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./reducers";

import { BrowserRouter } from "react-router-dom";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
