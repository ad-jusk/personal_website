import { Container } from "@chakra-ui/react";
import { Page } from "@components/Page";
import { TextSection } from "@components/section/TextSection";
import { ReactElement } from "react";

const Experience = (): ReactElement => {
  return (
    <Page animationDuration={0}>
      <Container maxW={{ base: "60ch", md: "80ch" }}>
        <TextSection
          headerTranslationKey="experience"
          paragraphTranslationKeys={["section.paragraphs.lorem"]}
        />
      </Container>
    </Page>
  );
};

export default Experience;
