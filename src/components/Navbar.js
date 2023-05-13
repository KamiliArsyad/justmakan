import React from "react";
import { Flex, Button, Tooltip, useColorModeValue } from "@chakra-ui/react";
import HomeIcon from '@mui/icons-material/Home';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';
// import { Icon as ChakraIcon, HomeIcon, InfoIcon, AddIcon } from "@chakra-ui/react";

const Navbar = (props) => {
  const bg = useColorModeValue("white", "gray.700");
  const border = useColorModeValue("gray.200", "gray.600");
  const darkBg = useColorModeValue("gray.700", "gray.900");
  const darkBorder = useColorModeValue("gray.600", "gray.700");
  const textColor = useColorModeValue("gray.500", "gray.400");
  const darkTextColor = useColorModeValue("blue.600", "blue.500");

  return (
    <Flex
      bg={bg}
      border={border}
      borderColor={border}
      h="16"
      maxW="lg"
      pos="fixed"
      bottom="4"
      left="50%"
      transform="translateX(-50%)"
      align="center"
      justify="space-between"
      px="4"
      py="2"
      rounded="md"
      boxShadow="sm"
      transition="all 0.2s ease-in-out"
      _hover={{
        boxShadow: "md",
      }}
      _dark={{
        bg: darkBg,
        border: darkBorder,
      }}
    >
      <Button
        variant="ghost"
        color={textColor}
        _hover={{ bg: "gray.50" }}
        _dark={{ color: "whiteAlpha.800", _hover: { bg: "gray.800" } }}
      >
        <HomeIcon
          w="6"
          h="6"
          mb="1"
          color={textColor}
          _groupHover={{ color: darkTextColor }}
          _dark={{ _groupHover: { color: "blue.500" } }}
        />
        <span className="sr-only">Home</span>
        <Tooltip label="Home" placement="top" hasArrow>
          <span />
        </Tooltip>
      </Button>
      <Button
        variant="ghost"
        color={textColor}
        _hover={{ bg: "gray.50" }}
        _dark={{ color: "whiteAlpha.800", _hover: { bg: "gray.800" } }}
      >
        <InfoIcon
          w="6"
          h="6"
          mb="1"
          color={textColor}
          _groupHover={{ color: darkTextColor }}
          _dark={{ _groupHover: { color: "blue.500" } }}
        />
        <span className="sr-only">Wallet</span>
        <Tooltip label="Wallet" placement="top" hasArrow>
          <span />
        </Tooltip>
      </Button>
      <Flex justify="center">
        <Button
          variant="solid"
          colorScheme="blue"
          size="lg"
          rounded="full"
          shadow="md"
          _hover={{ shadow: "lg" }}
          onClick={props.handleCameraClick}
        >
          <CameraAltIcon w="6" h="6" color="white" />
          <span className="sr-only">New item</span>
          <Tooltip label="New item" placement="top" hasArrow>
            <span />
          </Tooltip>
        </Button>
      </Flex>
      
      <Button
        variant="ghost"
        color={textColor}
        _hover={{ bg: "gray.50" }}
        _dark={{ color: "whiteAlpha.800", _hover: { bg: "gray.800" } }}
      >
        <BarChartIcon
          w="6"
          h="6"
          mb="1"
          color={textColor}
          _groupHover={{ color: darkTextColor }}
          _dark={{ _groupHover: { color: "blue.500" } }}
        />
        <span className="sr-only">Wallet</span>
        <Tooltip label="Wallet" placement="top" hasArrow>
          <span />
        </Tooltip>
      </Button>
      
      <Button
        variant="ghost"
        color={textColor}
        _hover={{ bg: "gray.50" }}
        _dark={{ color: "whiteAlpha.800", _hover: { bg: "gray.800" } }}
      >
        <SettingsIcon
          w="6"
          h="6"
          mb="1"
          color={textColor}
          _groupHover={{ color: darkTextColor }}
          _dark={{ _groupHover: { color: "blue.500" } }}
        />
        <span className="sr-only">Wallet</span>
        <Tooltip label="Wallet" placement="top" hasArrow>
          <span />
        </Tooltip>
      </Button>
    </Flex>
  );
};

export default Navbar;
