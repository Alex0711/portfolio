import { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
  Button,
  Card,
  CardBody,
  Collapse,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const CertificatesList = ({ courses }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Accordion allowToggle>
      <Collapse startingHeight="8rem" in={show}>
        {courses.map((course) => {
          return (
            <AccordionItem key={course.id}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {course.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Card
                  direction={{ base: "column", md: "row" }}
                  overflow="hidden"
                  variant="outline"
                  alignItems="center"
                >
                  <Box maxW={{ base: "100%", md: "40%" }}>
                    <Link
                      href={`https://drive.google.com/uc?id=${course.id}`}
                      target="_blank"
                      display="flex"
                    >
                      <Image
                        objectFit="contain"
                        // maxW={{ base: "100%", md: "40%" }}
                        src={`https://drive.google.com/uc?id=${course.id}`}
                        alt={`${course.title}`}
                      />
                    </Link>
                  </Box>
                  <Stack>
                    <CardBody>
                      <Text py="2">
                        {course.description}
                        <br />
                      </Text>
                    </CardBody>

                    <Box padding="1.2rem">
                      {course.repo.length === 0 ? (
                        <></>
                      ) : (
                        <Link href={course.repo} target="_blank">
                          link to {course.title} Repo
                        </Link>
                      )}
                    </Box>
                  </Stack>
                </Card>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? "Less" : "More"}
      </Button>
    </Accordion>
  );
};

export default CertificatesList;
