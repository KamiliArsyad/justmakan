import QrScanner from "react-qr-scanner";
import { useToast, Box } from "@chakra-ui/react";

export default function CameraScanner() {
  const toast = useToast();

  const toastProps = {
    title: "Plate Scanned",
    description: "Your points have been added to your account.",
    status: "success",
    duration: 3000,
    isClosable: true,
    position: "top",
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
    <Box
      w="90%"
      h="90%"
      bg="gray.100"
      border="1px solid black"
      borderRadius="3px"
      delay={2000}
    >
      <QrScanner
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        onClick={() => {
          toast(toastProps);
        }}
      />
    </Box>
  );
}
