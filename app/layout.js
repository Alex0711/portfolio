"use client";
import { carouselContext, useInitailState } from "../context/carouselContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import ToggleColorMode from "../components/header/toggleColorMode";
import "./styles.css";

const RootLayout = ({ children }) => {
  const initialState = useInitailState();
  return (
    <html>
      <body>
        <carouselContext.Provider value={initialState}>
          <ChakraProvider theme={theme}>
            <ToggleColorMode />
            {children}
          </ChakraProvider>
        </carouselContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
