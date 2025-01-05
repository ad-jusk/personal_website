import { ReactElement } from "react";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Page } from "@components/Page";
import { TextSection } from "@components/section/TextSection";
import { CustomSection } from "@components/section/CustomSection";
import { EducationGraph } from "@components/EducationGraph";
import { LanguagesGraph } from "@components/LanguagesGraph";
import { Hobbies } from "@components/Hobbies";

const Home = (): ReactElement => {
  return (
    <Page>
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
            py={1}
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
          ></Box>
        </Box>
      </Box>
      <Flex direction="column" rowGap={10}>
        <TextSection
          headerTranslationKey="section.headers.aboutMe"
          paragraphTranslationKeys={["section.paragraphs.aboutMe"]}
        />
        <CustomSection
          headerTranslationKey="section.headers.education"
          children={<EducationGraph />}
        />
        <CustomSection
          headerTranslationKey="section.headers.languages"
          children={<LanguagesGraph />}
        />
        <CustomSection headerTranslationKey="section.headers.hobbies" children={<Hobbies />} />
      </Flex>
    </Page>
  );
};

export default Home;
