"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import {
  Box,
  Button,
  ButtonGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import { PROJECTS } from "../carrousel/projects";
import { ProjectCard } from "./projectCard";

const DIRECTION = {
  BACK: "BACK",
  NEXT: "NEXT",
};

const Parallax = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [minHeight, setMinHeight] = useState(0);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const cardRefs = useRef([]);

  useEffect(() => {
    const cardHeights = cardRefs.current.map((cardRef) => cardRef.offsetHeight);
    const maxHeight = Math.max(...cardHeights);
    setMinHeight(maxHeight);
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // const handleStart = () => setLoading(true);
    // const handleComplete = () => setLoading(false);
   
    // window.addEventListener('beforeunload', handleStart);
    // window.addEventListener('load', handleComplete);
    return () => {
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener('beforeunload', handleStart);
      // window.removeEventListener('load', handleComplete);
    };
  
    
  }, [cardRefs, width]);

  const moveSlide = (direction) => {
    if (direction === DIRECTION.BACK) {
      setCurrentIndex(currentIndex === 1 ? PROJECTS.length : currentIndex - 1);
      // setDirection(DIRECTION.BACK);
      console.log({ currentIndex });
    } else {
      setCurrentIndex(currentIndex === PROJECTS.length ? 1 : currentIndex + 1);
      // setDirection(DIRECTION.NEXT);
      console.log({ currentIndex });
    }
  };

  const position = (index) => {
    const positions = [
      "target",
      "right",
      "back",
      "left",
      "target",
      "right",
      "back",
      "left",
    ];
    return positions[currentIndex + index - 2];
  };

  return (
    // <Box display="flex">
    //   <Box className="carousel" >
    <>
        {PROJECTS.map((project, index) => {
          return (
            <Box
              className={`box box${index + 1} ${position(index + 1)}`}
              key={index}
              // minH={minHeight}
            >
              <ProjectCard project={project} />
            </Box>
          );
        })}
        <ButtonGroup
          top="115vh"
          // display="block"
          pos="absolute"
          left="5%"

          w="90%"
          display="flex"
          justifyContent="space-between"
          zIndex={4}
        >
          <Button
            onClick={() => moveSlide(DIRECTION.BACK)}
            background={useColorModeValue("veryLightGrey", "veryDarkBlue")}
            
          >
            {" "}
            <HiChevronLeft />{" "}
          </Button>
          <Button
            onClick={() => moveSlide(DIRECTION.NEXT)}
            background={useColorModeValue("veryLightGrey", "veryDarkBlue")}
          >
            {" "}
            <HiChevronRight />{" "}
          </Button>
        </ButtonGroup>
    </>
    //   </Box>
    // </Box>
  );
};

export default Parallax;
