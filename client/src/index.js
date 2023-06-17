import React from "react";
import ReactDOM from "react-dom";
// use for static routing
// import { HashRouter } from "react-router-dom";

// use for dynamic routing
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
