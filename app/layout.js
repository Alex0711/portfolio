"use client";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
// import Header from "../components/header/header";
import ToggleColorMode from "../components/header/toggleColorMode";
import Footer from "../components/footer/footer";
// import Preloader from "../components/preload/preload";
import "./styles.css";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <ChakraProvider theme={theme}>
          {/* <Header /> */}
          {/* <Preloader /> */}
          <ToggleColorMode />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
