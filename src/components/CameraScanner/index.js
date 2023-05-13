import CameraButton from "./CameraButton";
import CameraScan from "./CameraScan";
import { Stack, Divider } from "@chakra-ui/react";
import { useState } from "react";

function CameraScanner() {
  // State for whether camera is open or not
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleClick = () => {
    setCameraOpen((prev) => !prev);
  };

  return (
    <Stack direction="column" spacing={4}>
      <div>
        <CameraButton onClick={handleClick} />
      </div>
      <div>{cameraOpen && <CameraScan />}</div>
    </Stack>
  );
}

export default CameraScanner;
