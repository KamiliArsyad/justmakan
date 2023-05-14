import React, { useState } from "react"
import CameraScanner from "./components/CameraScanner";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  
  // State for whether camera is open or not
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleClick = () => {
    setCameraOpen((prev) => !prev);
  };

  return (
    <>
    {/* This is messed up since now the outlet will be on top of the scanner but itsok lol */}
      <CameraScanner cameraOpen={cameraOpen} handleClick={handleClick} />
      <Outlet />
      <Navbar handleCameraClick={handleClick} />
    </>
  );
}

export default App;
