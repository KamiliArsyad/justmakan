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
    <Stack direction="column" spacing={4} align={"center"}>
      <div>
        <CameraButton onClick={handleClick} />
      </div>
      {cameraOpen && <CameraScan />}
    </Stack>
  );
}

export default CameraScanner;
