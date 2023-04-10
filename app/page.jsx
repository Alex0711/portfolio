"use client";
import { Stack, Divider,  } from "@chakra-ui/react";
import Welcome from "../components/welcome/welcome";
import Certificates from "../components/certificates/certificates";
import Carousel from "../components/paralaxCarousel/carousel";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <main>
      <Stack className="parallax-container">   
        <Welcome />
        <Carousel/>
        <Certificates />
        <Divider />
        <Footer />
      </Stack>
    </main>
  );
}