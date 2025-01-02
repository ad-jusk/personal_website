import { Page } from "@components/Page";
import { CustomSection } from "@components/section/CustomSection";
import { SkillCategoryAccordion } from "@components/skills/SkillCategoryAccordion";
import { skillCategories } from "@components/skills/skillCategories";
import { SisyphusIcon } from "@icons/SisyphusIcon";
import { ReactElement } from "react";

const Skills = (): ReactElement => {
  return (
    <Page animationDuration={0}>
      <CustomSection headerTranslationKey="skills" children={<SisyphusIcon />} />
      <SkillCategoryAccordion skillCategories={skillCategories} />
    </Page>
  );
};

export default Skills;
