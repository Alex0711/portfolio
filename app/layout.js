"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import ToggleColorMode from "../components/header/toggleColorMode";
import "./styles.css";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <ChakraProvider theme={theme}>
          <ToggleColorMode />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
