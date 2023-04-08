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
import { PROJECTS } from "./projects";
import "./styles.css";

const DIRECTION = {
  BACK: "BACK",
  NEXT: "NEXT",
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [minHeight, setMinHeight] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const videoRef = useRef([]);
  const cardRefs = useRef([]);

  //to resize carousel
  useEffect(() => {
    const cardHeights = cardRefs.current.map((cardRef) => cardRef.offsetHeight);
    const maxHeight = Math.max(...cardHeights);
    setMinHeight(maxHeight);
    const handleResize = () => setWidth(window.innerWidth);

    setVideoHeight(videoRef.current[0]?.offsetHeight);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cardRefs, width]);

  const position = (index) => {
    const positions = ["target", "right", "back", "left", "target", "right", "back", "left"];
    return positions[currentIndex + index -2]
  };

  const moveSlide = (direction) => {
    if (direction === DIRECTION.BACK) {
      setCurrentIndex(currentIndex === 1 ? PROJECTS.length : currentIndex - 1);
      console.log({ currentIndex });
    } else {
      setCurrentIndex(currentIndex === PROJECTS.length ? 1 : currentIndex + 1);
      console.log({ currentIndex });
    }
  };

  return (
    <Box paddingBottom="50vh">
      <Box
        className="parallax-container"
      >
        {PROJECTS.map((video, index) => (
          <Card
            ref={(ref) => (cardRefs.current[index] = ref)}
            key={index}
            // background="transparent"
            shadow="none"
            className={`box ${position(index)}`}
          >
            <CardBody>
              <AspectRatio
                ratio={21 / 9}
                ref={(ref) => (videoRef.current[index] = ref)}
                overflow="hidden"
              >
                <iframe
                  overflow="hidden"
                  title={video.title}
                  src={video.src}
                  allowFullScreen
                />
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
        top={-minHeight + videoHeight / 2}
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
  );
};

export default Carousel;
