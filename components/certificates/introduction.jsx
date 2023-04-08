import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const Introduction = () => {
  return (
    <Card
      direction={{ base: "column", lg: "row" }}
      //   variant="outline"
      background="transparent"
      shadow="none"
      w="99%"
      marginLeft="0"
    >
      <Link
        href="https://drive.google.com/file/d/1iP8-CCod2a5JuoZ2sxgtAtuM0KsnAHZT/view"
        maxW={{ base: "100%", lg: "30%" }}
        h="auto"
      >
        <Image
          objectFit="contain"
          // maxW={{ base: "100%", lg: "30%" }}
          src="https://drive.google.com/uc?id=1iP8-CCod2a5JuoZ2sxgtAtuM0KsnAHZT"
          alt="Next professional course"
        />
      </Link>

      <Stack>
        <CardBody paddingBottom={0}>
          <Heading size="md">Certificates</Heading>

          <Text>
            In my journey as a developer, I have learned from different sources,
            including Platzi, YouTube, and Stack Overflow. Each of my Platzi
            certificates represents a goal achieved in my path of learning and
            growth. In addition, thanks to the experience I have gained in
            personal and professional projects, I have been able to apply the
            knowledge acquired in different situations and enrich my technical
            skills.
          </Text>
          <Text>
            I believe that continuous learning is fundamental in the world of
            software development, which is why I am always looking for new
            opportunities to learn and improve my technical and soft skills. I
            am passionate about sharing my knowledge and helping others grow in
            their careers, and I hope to continue learning and adding value in
            my journey as a developer.
          </Text>
          <br />
          {/* <Link href="https://drive.google.com/file/d/1iP8-CCod2a5JuoZ2sxgtAtuM0KsnAHZT/view">
            Link to certificate
          </Link> */}
        </CardBody>
      </Stack>
    </Card>
  );
};

export default Introduction;
