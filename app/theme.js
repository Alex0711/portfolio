import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#F1F3F2", "#191919")(props),
        color: mode("#283D3B", "#fff")(props),
        textAlign: "justify",
      },
    }),
  },
  colors: {
    turquoise: "#61DAFB",
    blue: "#3572A5",
    yellow: "#F7DF1E",
    veryLightGrey: "#F1F3F2",
    veryDarkBlue: "#191919",
    darkText: "#283D3B",
    lightText: "#fff",
  },
  fonts: {
    body: `"Open Sans"`,
  },
  breakpoints: {
    sm: "350px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
};

export default extendTheme(theme);
