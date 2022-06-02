import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import "../node_modules/normalize.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
