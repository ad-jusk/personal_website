import { Container } from "@chakra-ui/react";
import { Page } from "@components/Page";
import { Section } from "@components/Section";
import { ReactElement } from "react";

const Experience = (): ReactElement => {
  return (
    <Page animationDuration={0}>
      <Container maxW={{ base: "60ch", md: "80ch" }}>
        <Section
          headerTranslationKey="section.headers.aboutMe"
          paragraphTranslationKey="section.paragraphs.lorem"
        />
      </Container>
    </Page>
  );
};

export default Experience;
