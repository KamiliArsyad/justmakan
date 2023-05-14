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
      <Outlet />
      <CameraScanner cameraOpen={cameraOpen} handleClick={handleClick} />
      <Navbar handleCameraClick={handleClick} cameraOpen={cameraOpen} />
    </>
  );
}

export default App;
