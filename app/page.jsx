"use client";
import { useEffect, useState, useRef } from "react";
import { Stack, Divider,  } from "@chakra-ui/react";
import Welcome from "../components/welcome/welcome";
// import Carousel from "../components/carrousel/carrousel";
import AboutMe from "../components/aboutMe/aboutMe";
import ToggleColorMode from "../components/header/toggleColorMode";
import Certificates from "../components/certificates/certificates";
import Parallax from "../components/paralax/paralax";
import Footer from "../components/footer/footer";
import Carousel from "../components/carrousel/funciona";

export default function Home() {
  return (
    <main>
      <Stack className="parallax-container">   
        {/* <ToggleColorMode /> */}
        <Welcome />
        {/* <AboutMe />      */}
        {/* <Divider /> */}
        {/* <Carousel /> */}
        {/* <Divider /> */}
        <Parallax/>
        <Certificates />
        <Divider />
        <Footer />
      </Stack>
    </main>
  );
}