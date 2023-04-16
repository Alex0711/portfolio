"use client";
import React, { useState, useRef, useEffect, useContext } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { carouselContext } from "../../context/carouselContext";
import { PROJECTS } from "./projects";
import { ProjectCard } from "./projectCard";
import useCarousel from "../../hooks/useCarousel";

const Carousel = () => {
  const [minHeight, setMinHeight] = useState(0);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const cardRefs = useRef([]);
  const {
    position,
    handleTouchStart,
    handleTouchEnd,
    moveSlide,
    DIRECTION,
  } = useCarousel();
  const { currentIndex, canMove } = useContext(carouselContext)

  useEffect(() => {
    const cardHeights = cardRefs.current.map((cardRef) => cardRef.offsetHeight);
    const maxHeight = Math.max(...cardHeights);
    setMinHeight(maxHeight);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        moveSlide(DIRECTION.BACK);
      } else if (event.key === "ArrowRight") {
        moveSlide(DIRECTION.NEXT);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [cardRefs, width, currentIndex, canMove]);

  return (
    <>
      {PROJECTS.map((project, index) => {
        return (
          <Box
            ref={(ref) => (cardRefs.current[index] = ref)}
            className={`box box${index + 1} ${position(index + 1)}`}
            key={index}
            minH={minHeight}
            onTouchStart={(e) => handleTouchStart(e)}
            onTouchEnd={(e) => handleTouchEnd(e)}
          >
            <ProjectCard project={project} />
          </Box>
        );
      })}
      <ButtonGroup
        top={{
          base: `calc(80vh + ${minHeight / 8}px)`,
          md: `calc(80vh + ${minHeight / 3}px)`,
          lg: `calc(80vh + ${minHeight / 2}px)`,
        }}
        pos="absolute"
        left="calc(10% - 3rem)"
        w="calc(80% + 6rem)"
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        zIndex={3}
      >
        <Button onClick={() => moveSlide(DIRECTION.BACK)}>
          <HiChevronLeft />
        </Button>
        <Button onClick={() => moveSlide(DIRECTION.NEXT)}>
          <HiChevronRight />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Carousel;
