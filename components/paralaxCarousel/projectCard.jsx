import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiGlobeAlt } from "react-icons/hi2";
import { GoMarkGithub } from "react-icons/go";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <Card mt="6" spacing="3" shadow="none">
      <CardBody>
        <AspectRatio
          ratio={21 / 9}
          overflow="hidden"
          maxH="100%"
          pos="relative"
          display="block"
        >
          {project.type === "image" ? (
            <Image
              title={project.title}
              src={project.src}
              alt={`${project.title}`}
              fill={true}
              sizes="100%"
            />
          ) : (
            <iframe title={project.title} src={project.src} allowFullScreen />
          )}
        </AspectRatio>
        <Stack>
          <Heading size="md"> {project.title} </Heading>
          <Text>{project.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter fontSize="sm" display="flex" flexDir="column">
        <Link
          display="flex"
          href={project.repository}
          target="_blank"
          alignItems="center"
        >
          <GoMarkGithub />
          <Text> &nbsp; Project Repository </Text>
        </Link>
        {project.website.length > 0 ? (
          <Link
            display="flex"
            href={project.website}
            target="_blank"
            alignItems="center"
          >
            <HiGlobeAlt />
            <Text> &nbsp; Website </Text>
          </Link>
        ) : (
          <></>
        )}
      </CardFooter>
    </Card>
  );
};

export { ProjectCard };
