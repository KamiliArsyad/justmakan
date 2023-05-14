import React, { useState } from "react"
import CameraScanner from "./components/CameraScanner";
import Navbar from "./components/Navbar";

function App() {
  
  // State for whether camera is open or not
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleClick = () => {
    setCameraOpen((prev) => !prev);
  };

  return (
    <>
      <CameraScanner cameraOpen={cameraOpen} handleClick={handleClick} />
      <Navbar handleCameraClick={handleClick} />
    </>
  );
}

export default App;
