import QrScanner from "react-qr-scanner";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function CameraScanner() {
  const toast = useToast();

  const toastProps = {
    title: "Plate Scanned",
    description: "Your points have been added to your account.",
    status: "success",
    duration: 3000,
    isClosable: true,
  };

  const handleScan = (data) => {
    if (data) {
      toast(toastProps);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrScanner
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        onClick={() => {
          toast(toastProps);
        }}
      />
    </div>
  );
}
