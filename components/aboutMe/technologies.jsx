import {
  Heading,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import Image from "next/image";
import css3Color from "./../../public/icons/css3-color.svg";
import html5color from "./../../public/icons/html5-color.svg";
import javaScriptColor from "./../../public/icons/javaScript-color.svg";
import next from "./../../public/icons/nextdotjs-color.svg";
import mongoDB from "./../../public/icons/mongodb-color.svg";
import docker from "./../../public/icons/docker-color.svg";
import express from "./../../public/icons/express-color.svg";
import github from "./../../public/icons/github-color.svg";
import mysql from "./../../public/icons/mysql-color.svg";
import nodedotjs from "./../../public/icons/nodedotjs-color.svg";
import postgresql from "./../../public/icons/postgresql-color.svg";
import react from "./../../public/icons/react-color.svg";
import socketdotio from "./../../public/icons/socketdotio-color.svg";

const Technologies = () => {
  return (
    <Card shadow={0} w={{ base: "100%", md: "35%" }}  >
      <CardHeader display="flex" justifyContent="center" >
        <Heading size="md">Favorite technologies</Heading>
      </CardHeader>
      <CardBody
        display="flex"
        h="100%"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={javaScriptColor}
          alt="HTML5"
        />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={css3Color}
          alt="CSS3"
        />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={html5color}
          alt="HTML5"
        />
        <Image style={{ width: "16%", margin: "4%" }} src={next} alt="HTML5" />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={docker}
          alt="HTML5"
        />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={github}
          alt="HTML5"
        />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={socketdotio}
          alt="HTML5"
        />
        <Image style={{ width: "16%", margin: "4%" }} src={mysql} alt="HTML5" />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={postgresql}
          alt="HTML5"
        />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={express}
          alt="HTML5"
        />
        <Image style={{ width: "16%", margin: "4%" }} src={react} alt="HTML5" />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={nodedotjs}
          alt="HTML5"
        />
        <Image
          style={{ width: "16%", margin: "4%" }}
          src={mongoDB}
          alt="HTML5"
        />
      </CardBody>
    </Card>
  );
};

export default Technologies;
