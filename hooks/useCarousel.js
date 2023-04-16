import { useState, useContext, useCallback, useEffect } from "react";
import { carouselContext } from "../context/carouselContext";
import { PROJECTS } from "../components/paralaxCarousel/projects";

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

const useCarousel = () => {
  const [touchStartX, setTouchStartX] = useState(null);
  const { currentIndex, canMove, setCanMove, setCurrentIndex } =
    useContext(carouselContext);

  // Move carousel with touchs
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchStartX - touchEndX;
    if (touchDiff > 50) {
      moveSlide(DIRECTION.BACK);
    } else if (touchDiff < -50) {
      moveSlide(DIRECTION.NEXT);
    }
  };

  const moveSlide = useCallback(
    (direction) => {
      let newIndex = currentIndex;
      if (!canMove) return;

      if (direction === DIRECTION.BACK) {
        newIndex = currentIndex === 1 ? PROJECTS.length : currentIndex - 1;
      } else {
        newIndex = currentIndex === PROJECTS.length ? 1 : currentIndex + 1;
      }
      setCurrentIndex(newIndex);
      setCanMove(false);
      setTimeout(() => {
        setCanMove(true);
      }, [300]);
    },
    [currentIndex, canMove]
  );

  const position = (index) => {
    return POSITIONS[currentIndex + index - 2];
  };

//   useEffect(() => {
//     if (!canMove) {
      
//     }
//   }, [canMove]);

  return {
    position,
    handleTouchStart,
    handleTouchEnd,
    moveSlide,
    DIRECTION,
  };
};

export default useCarousel;
