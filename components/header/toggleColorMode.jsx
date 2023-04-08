import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box zIndex={4} pos="fixed" right="1rem"  >
      <IconButton fontSize="4xl"  bg="inherit" onClick={() => toggleColorMode()} icon={colorMode === "dark" ? (
        <SunIcon />
      ) : (
        <MoonIcon/>
      )}/>
    </Box>
  );
};

export default ToggleColorMode;