import { Container } from "@chakra-ui/react";
import { Page } from "@components/Page";
import { CustomSection } from "@components/section/CustomSection";
import { SisyphusIcon } from "@icons/SisyphusIcon";
import { ReactElement } from "react";

const Skills = (): ReactElement => {
  return (
    <Page animationDuration={0}>
      <Container maxW={{ base: "60ch", md: "80ch" }}>
        <CustomSection headerTranslationKey="skills" children={<SisyphusIcon />} />
      </Container>
    </Page>
  );
};

export default Skills;
