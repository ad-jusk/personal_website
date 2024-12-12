import { Page } from "@components/Page";
import { CustomSection } from "@components/section/CustomSection";
import { SisyphusIcon } from "@icons/SisyphusIcon";
import { ReactElement } from "react";

const Skills = (): ReactElement => {
  return (
    <Page animationDuration={0}>
      <CustomSection headerTranslationKey="skills" children={<SisyphusIcon />} />
    </Page>
  );
};

export default Skills;
