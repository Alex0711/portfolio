import React, { useState } from "react";

const carouselContext = React.createContext({});

const initialState = {
  currentIndex: 1,
  canMove: true,
};

const useInitailState = () => {
  const [currentIndex, setCurrentIndex] = useState(initialState.currentIndex);
  const [canMove, setCanMove] = useState(initialState.canMove);

  return {
    currentIndex,
    canMove,
    setCurrentIndex,
    setCanMove,
  };
};

export { carouselContext, useInitailState };
