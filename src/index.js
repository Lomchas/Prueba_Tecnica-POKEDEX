import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Containers/App";
import { store } from "./Redux/Store/store";
import "./Styles/Index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
