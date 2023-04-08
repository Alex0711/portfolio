import {
  Box,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiCode } from "react-icons/hi";
import ToggleColorMode from "./toggleColorMode";

const Header = () => {
  return (
    <>
      <Flex
        w="100%"
        h="4rem"
        bgColor={useColorModeValue("#81A3A7", "#040C0E")}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex pl="2%" justifyContent="space-between">
          <Box display={{ base: "none", sm: "flex" }}>
            <HiCode fontSize="2em" />
          </Box>
          <Button fontSize="1.4em" bg="inherit">
            Home
          </Button>
          <Button fontSize="1.4em" bg="inherit">
            About Me
          </Button>
        </Flex>
        <Flex pr="2%">
          <ToggleColorMode />
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
