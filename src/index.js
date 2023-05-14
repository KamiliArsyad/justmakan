import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Points from "./pages/Points";
import Explore from "./pages/Explore";
import Rewards from "./pages/Rewards";
import '@fontsource/inter/700.css'
import '@fontsource/inter/400.css'
import Scan from "./pages/Scan";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  colors: {
    brand: {
      100: "#488829",
      200: "#067655",
      300: "#FF894F",
      400: "#294A88"
    },
  },  
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter 400', sans-serif`,
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          {/* Since the app is just a demo and is not very big, a simple one-page App as the main page
              works fine without any further coordination */}
          <Route path="/" element={<App />}>
            <Route path="points" element={<Points />} />
            <Route path="explore" element={<Explore />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="scan" element={<Scan />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
