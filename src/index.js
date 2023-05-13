import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Since the app is just a demo and is not very big, a simple one-page App as the main page
        works fine without any further coordination */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
