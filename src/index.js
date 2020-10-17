import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";

import "./index.css";
import App from "./App";
import items from "./reducers";

const store = createStore(items);
console.log("store", store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
