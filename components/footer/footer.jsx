import { Box, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GitHub } from "../icons/gitHub";
import { LinkedIn } from "../icons/linkedIn";
import { Vercel } from "../icons/vercel";

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Stack>
        <Text>Proudly made by Alejandro Senger</Text>
        <Box display="flex" justifyContent="space-around">
          <Link href="https://github.com/Alex0711">
            <Box w="2rem">
              <GitHub />
            </Box>
          </Link>
          <Link href="https://www.linkedin.com/in/alejandro-senger/">
            <Box w="2rem">
              <LinkedIn />
            </Box>
          </Link>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          Deployed by &nbsp;
          <Box w=".8rem">
            <Vercel />
          </Box>
          &nbsp; Vercel
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
