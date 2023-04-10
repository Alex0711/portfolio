"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import {
  Card,
  Box,
  Button,
  ButtonGroup,
  AspectRatio,
  CardBody,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

import { PROJECTS } from "../paralaxCarousel/projects";
const videos = [
  {
    src: "https://drive.google.com/uc?id=11sD14mQH7DKa2cRVWfl3lbDE5HJgbajb",
    title: "Custom Sports",
    description: `In the "Custom Sports" project, I worked as a full-stack web developer, responsible for integrating the Paypal SDK to securely and efficiently process payments on the platform. Additionally, I worked on integrating the Google SDK, allowing users to create or register an account quickly and easily. I also had the responsibility of developing and maintaining the website's functionality, ensuring a smooth and engaging user experience. During my work on this project, I learned to handle different technologies and tools to improve the efficiency and quality of the website.`,
  },
  {
    src: "https://drive.google.com/uc?id=1B8Rec1F2F0p2dNDQCmn2e8DmUKxD7375",
    title: "Virtual Wallet",
    description: `In the "Virtual Wallet" project, I served as a full-stack developer and, together with a team, we created a virtual wallet from scratch. Specifically, I created the database in a Docker container with MySQL, using Sequelize as ORM with migrations and seeds. Additionally, I developed the authentication system using JWT and password hashing with Bcrypt. To ensure the security and efficiency of the website, I implemented middlewares for error handling and authentication. I also developed some of the routes and controllers in the BackEnd, and the forms in the FrontEnd to ensure an intuitive and user-friendly experience.`,
  },
  {
    src: "https://alex0711.github.io/taller-pr-ctico-canvas-/",
    title: "Canvas Game",
    description: "añlskdfjsaldfk ñaskdl fñasldk fañsld kfjñaslkdfj "
  }
];

const DIRECTION = {
  BACK: "BACK",
  NEXT: "NEXT",
};

const Carousel = () => {
  const [minHeight, setMinHeight] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const videoRef = useRef([]);
  const cardRefs = useRef([]);

  //to resize carousel
  useEffect(() => {
    const cardHeights = cardRefs.current.map(
      (cardRef) => cardRef.offsetHeight
    );
    const maxHeight = Math.max(...cardHeights);
    setMinHeight(maxHeight);
    const handleResize = () => setWidth(window.innerWidth);

    setVideoHeight(videoRef.current[0]?.offsetHeight)

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cardRefs, width]);

  const moveSlide = (direction) => {
    if (direction === DIRECTION.BACK) {
      setCurrentIndex(
        currentIndex === 1 ? PROJECTS.length : currentIndex - 1
      );
    } else {
      setCurrentIndex(
        currentIndex === PROJECTS.length ? 1 : currentIndex + 1
      );
    }
  };

  return (
    <Box paddingBottom="50vh">
      <Box
        display="block"
        // w="98%"
        margin="auto"
        overflow="hidden"
        height={minHeight}
      >
        <Box
          display="flex"
          transform={`translateX(-${(currentIndex * 100 - 100)}%)`}
          transition="transform 0.3s ease-in-out"
          // paddingLeft="5%"  
        >
          {PROJECTS.map((video, index) => (
            <Card
              ref={(ref) => (cardRefs.current[index] = ref)}
              key={video.title}
              minW="100%"
              background="transparent"
              shadow="none"

            >
              <CardBody  >
                <AspectRatio
                  ratio={21 / 9}
                  ref={(ref) => (videoRef.current[index] = ref)}
                  overflow="hidden"
                >
                  <iframe overflow="hidden" title={video.title} src={video.src} allowFullScreen />
                </AspectRatio>
                <Stack mt="6" spacing="3">
                  <Heading size="md"> {video.title} </Heading>
                  <Text>{video.description}</Text>
                </Stack>
              </CardBody>
            </Card>
            // </Box>
          ))}
        </Box>
        <ButtonGroup
          top={- minHeight + (videoHeight/2)}
          pos="relative"
          w="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Button onClick={() => moveSlide(DIRECTION.BACK)}>
            {" "}
            <HiChevronLeft />{" "}
          </Button>
          <Button onClick={() => moveSlide(DIRECTION.NEXT)}>
            {" "}
            <HiChevronRight />{" "}
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Carousel;
