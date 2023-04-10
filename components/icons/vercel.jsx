import { useColorModeValue } from "@chakra-ui/react";

const Vercel = () => {
  return (
    <>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path
          fill={useColorModeValue("black", "white")}
          d="M24 22.525H0l12-21.05 12 21.05z"
        />
      </svg>
    </>
  );
};

export { Vercel };
