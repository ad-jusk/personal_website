import { Page } from "@components/Page";
import { CustomSection } from "@components/section/CustomSection";
import { ExperienceGraph } from "@components/ExperienceGraph";
import { ReactElement } from "react";

const Experience = (): ReactElement => {
  return (
    <Page animationDuration={0}>
      <CustomSection headerTranslationKey="experience" children={<ExperienceGraph />} />
    </Page>
  );
};

export default Experience;
