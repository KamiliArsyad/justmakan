import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Points from "./pages/Points";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          {/* Since the app is just a demo and is not very big, a simple one-page App as the main page
              works fine without any further coordination */}
          <Route path="/" element={<App />}>
            <Route path="points" element={<Points />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
