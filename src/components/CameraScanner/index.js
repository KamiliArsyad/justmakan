import CameraButton from "./CameraButton";
import CameraScan from "./CameraScan";
import { Stack, Divider } from "@chakra-ui/react";
import { useState } from "react";

function CameraScanner(props) {
  return (
    <Stack direction="column" spacing={4} align={"center"}>
      {/* <div>
        <CameraButton onClick={props.handleClick} />
      </div> */}
      <div></div>
      {props.cameraOpen && <CameraScan />}
    </Stack>
  );
}

export default CameraScanner;
