import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import github from "./../../public/icons/github-color.svg";
import Image from "next/image";


const ProjectCard = ({ project }) => {
  return (
    <Card
      mt="6"
      spacing="3"
      shadow="none"
    >
      <CardBody>
        <AspectRatio ratio={21 / 9} overflow="hidden">
          <iframe title={project.title} src={project.src} allowFullScreen />
        </AspectRatio>
        <Stack>
          <Heading size="md"> {project.title} </Heading>
          <Text>{project.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter >
        <Link display="flex" alignContent="center" href={project.repository} target="_blank">
          {" "}
          <Image src={github} alt="GitHub icon" /> &nbsp; Project Repository
        </Link>
      </CardFooter>
    </Card>
  );
};

export { ProjectCard };
