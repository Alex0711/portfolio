import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  return (
    <Card
      background="transparent"
      shadow="none"
      // className={`box ${position(index)}`}
    >
      <CardBody>
        <AspectRatio
          ratio={21 / 9}
          // ref={(ref) => (videoRef.current[index] = ref)}
          overflow="hidden"
        >
          <iframe
            overflow="hidden"
            title={project.title}
            src={project.src}
            allowFullScreen
          />
        </AspectRatio>
        <Stack color={useColorModeValue("lightText", "darkText")} mt="6" spacing="3">
          <Heading size="md" > {project.title} </Heading>
          <Text>{project.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export { ProjectCard };
