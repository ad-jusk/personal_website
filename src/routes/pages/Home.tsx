import { ReactElement } from "react";
import { Box, Container, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Page } from "@components/Page";
import { Section } from "@components/Section";

const Home = (): ReactElement => {
  return (
    <Page>
      <Container maxW={{ base: "60ch", md: "80ch" }}>
        <Box display={{ md: "flex" }}>
          <Flex flexGrow={1} direction="column" rowGap={1}>
            <Heading>Adam Juśkiewicz</Heading>
            <Box
              borderRadius="lg"
              bg={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
              css={{ backdropFilter: "blur(10px)" }}
              textAlign="center"
              maxW="fit-content"
              px={2}
              zIndex={-1}
            >
              <p>Fullstack Software Developer</p>
            </Box>
          </Flex>
          <Box flexShrink={0} textAlign="center" mt={{ base: 8, md: 0 }}>
            <Box
              borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            />
          </Box>
        </Box>
        <Section
          headerTranslationKey="section.headers.aboutMe"
          paragraphTranslationKey="section.paragraphs.lorem"
        />
      </Container>
    </Page>
  );
};

export default Home;
