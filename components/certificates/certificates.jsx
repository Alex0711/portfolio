import {
  Card,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Introduction from "./introduction";
import CertificatesList from "./certificatesList";
import { COURSES } from "./courses";

const Certificates = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const color = () => (colorMode === "dark" ? "lightText" : "darkText");
  const bg = () => (colorMode === "dark" ? "blue" : "turquoise");

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Card w="98%" background="transparent" shadow="none">
        <Introduction />
        <Card background="transparent" marginTop="1.2rem">
          <Tabs variant="soft-rounded">
            <TabList marginLeft="1.2rem">
              <Tab _selected={{ color: "darkText", bg: "yellow" }}>
                Frontend
              </Tab>
              <Tab _selected={{ bg: mode(bg()), color: mode(color()) }}>
                Backend
              </Tab>
              <Tab _selected={{ bg: mode(bg()), color: mode(color()) }}>
                Others
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <CertificatesList courses={COURSES.frontend} />
              </TabPanel>
              <TabPanel>
                <CertificatesList courses={COURSES.backend} />
              </TabPanel>
              <TabPanel>
                <CertificatesList courses={COURSES.others} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Card>
    </Box>
  );
};

export default Certificates;
