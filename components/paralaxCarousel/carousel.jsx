"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { PROJECTS } from "./projects";
import { ProjectCard } from "./projectCard";

const DIRECTION = {
  BACK: "BACK",
  NEXT: "NEXT",
};

const POSITIONS = [
  "target",
  "right",
  "back-r",
  "back-l",
  "left",
  "target",
  "right",
  "back-r",
  "back-l",
  "left",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [minHeight, setMinHeight] = useState(0);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const cardRefs = useRef([]);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [canMove, setCanMove] = useState(true);

  // Move carousel with touchs
  const handleTouchStart = (e, index) => {
    setTouchStartX(e.touches[0].clientX);
  }
  
  const handleTouchEnd = (e, index) => {
    setTouchEndX(e.changedTouches[0].clientX);
    const touchDiff = touchStartX - touchEndX;
    if (touchDiff > 50) {
      moveSlide(DIRECTION.BACK);
    } else if (touchDiff < -50) {
      moveSlide(DIRECTION.NEXT);
    }
  }


  useEffect(() => {
    // resize cards
    const cardHeights = cardRefs.current.map((cardRef) => cardRef.offsetHeight);
    const maxHeight = Math.max(...cardHeights);
    setMinHeight(maxHeight);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Move carousel with keyboard arrows
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        moveSlide(DIRECTION.BACK);
      } else if (event.key === "ArrowRight") {
        moveSlide(DIRECTION.NEXT);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    //removing listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [cardRefs, width, currentIndex]);

  const moveSlide = (direction) => {
    let newIndex = currentIndex;
    if (!canMove) return

    if (direction === DIRECTION.BACK) {
      newIndex = currentIndex === 1 ? PROJECTS.length : currentIndex - 1;
    } else {
      newIndex = currentIndex === PROJECTS.length ? 1 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setCanMove(false)
    setTimeout(()=> {
      setCanMove(true)
    }, [300])
  };


  const position = (index) => {
    return POSITIONS[currentIndex + index - 2];
  };

  return (
    <>
      {PROJECTS.map((project, index) => {
        return (
          <Box
            ref={(ref) => (cardRefs.current[index] = ref)}
            className={`box box${index + 1} ${position(index + 1)}`}
            key={index}
            minH={minHeight}
            onTouchStart={(e) => handleTouchStart(e, index)}
            onTouchMove={(e) => handleTouchEnd(e, index)}
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
        left="7%"
        w="86%"
        display="flex"
        justifyContent="space-between"
        zIndex={4}
      >
        <Button onClick={() => moveSlide(DIRECTION.BACK)} >
          <HiChevronLeft />
        </Button>
        <Button onClick={() => moveSlide(DIRECTION.NEXT)} >
          <HiChevronRight />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Carousel;
