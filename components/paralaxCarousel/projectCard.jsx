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
import { GitHub } from "../icons/gitHub";

const ProjectCard = ({ project }) => {
  return (
    <Card mt="6" spacing="3" shadow="none">
      <CardBody>
        <AspectRatio ratio={21 / 9} overflow="hidden">
          <iframe title={project.title} src={project.src} allowFullScreen />
        </AspectRatio>
        <Stack>
          <Heading size="md"> {project.title} </Heading>
          <Text>{project.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Link
          display="flex"
          href={project.repository}
          target="_blank"
          alignItems="center"
        >
          {" "}
          {/* <Image src={github} alt="GitHub icon" /> &nbsp; Project Repository */}
          <Box w="1.2rem">
            <GitHub />
          </Box>
          <Text fontSize="sm"> &nbsp; Project Repository </Text>
        </Link>
      </CardFooter>
    </Card>
  );
};

export { ProjectCard };
