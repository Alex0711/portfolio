"use client";
import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

const VideoCard = ({ src, title, description }) => {
  return (
    <Card bgColor={useColorModeValue("#C2D3DA", "#101217")}>
      <CardBody>
        <AspectRatio ratio={21 / 9}>
          <iframe title={title} src={src} allowFullScreen />
        </AspectRatio>
        <Stack mt="6" spacing="3">
          <Heading size="md"> {title} </Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default VideoCard;
