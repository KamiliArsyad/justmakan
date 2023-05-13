import CameraButton from "./CameraButton";
import CameraScan from "./CameraScan";
import { useState } from "react";

function CameraScanner() {
  // State for whether camera is open or not
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleClick = () => {
    setCameraOpen(prev => !prev);
  };

  return (
    <div>
      <CameraButton onClick={handleClick} />
      <div>
        {cameraOpen && <CameraScan />}
      </div>
    </div>
  );
}

export default CameraScanner;
