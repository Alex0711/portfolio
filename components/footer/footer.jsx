import { Box, Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import github from "./../../public/icons/github.svg";
import linkedin from "./../../public/icons/linkedin.svg";
import instagram from "./../../public/icons/instagram.svg";
import vercel from "./../../public/icons/vercel.svg";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = colorMode === "dark" ? "#FFFFFF" : "#000000";

  return (
    <Box display="flex" justifyContent="center">
      <Stack >
        <Text>Proudly made by Alejandro Senger</Text>
        <Box display="flex" justifyContent="space-around" >
          <Image
            style={{ width: "2rem", margin: "4%", fill: iconColor }}
            src={github}
            alt="GitHub"
            color={iconColor}
          />
          <Image
            style={{ width: "2rem", margin: "4%" }}
            src={linkedin}
            alt="LinkedIn"
          />
          <Image
            style={{ width: "2rem", margin: "4%", }}
            src={instagram}
            alt="Instagram"
          />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" >
          Deployed by <Image src={vercel} alt="Vercel" style={{width: "1rem", margin: "0.4rem"}} /> Vercel
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
