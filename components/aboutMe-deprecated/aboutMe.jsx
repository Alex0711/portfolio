import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Technologies from "./technologies";

const AboutMe = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} fontSize="lg">
      <Box
        background={useColorModeValue("turquoise", "veryDarkBlue")}
        w={{ base: "100%", md: "65%" }}
        position="relative"
        minH="100vh"
        overflow="hidden"
      >
        <Heading position="relative" zIndex={2} p="2%">
          WELCOME TO MY PORTFOLIO
        </Heading>

        <Text position="relative" zIndex={2} p="2%">
          Hi, I am a full stack developer with solid experience of around two
          years in web application development. I specialize in the PERN and
          MERN stacks, with my strong suit being in the backend.
        </Text>
        <Text position="relative" zIndex={2} p="2%">
          My experience in application development has allowed me to work on
          complex projects from scratch as well as optimize existing projects. I
          have expertise in technologies like Node.js, Express, React.js, Redux,
          PostgreSQL, MongoDB, among others. Additionally, I am an expert in
          implementing APIs and web services.
        </Text>
        <Text position="relative" zIndex={2} p="2%">
          As for my technical skills, I am capable of working with multiple
          programming languages and frameworks, which allows me to deliver
          effective and efficient solutions in any working environment. I also
          have experience using version control tools like Git.{" "}
        </Text>
        <Text position="relative" zIndex={2} p="2%">
          I am a committed and proactive individual, always willing to take on
          new challenges and learn new skills. I firmly believe in teamwork and
          constant communication with team members to achieve common goals.
        </Text>
        <Card
          position="absolute"
          top="0"
          right="-100%"
          w="100%"
          h="200%"
          zIndex={1}
          transformOrigin="left top"
          transform="rotate(6deg)"
          display={{ base: "none", md: "block" }}
        />
      </Box>
      <Technologies />
    </Flex>
  );
};

export default AboutMe;
