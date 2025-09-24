import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Stack,
  AccordionPanel,
  Box,
  Flex,
  Progress,
  Tag,
} from "@chakra-ui/react";
import { useTranslationContext } from "@utils/translationContext";
import { SkillCategory } from "@utils/types";
import { ReactElement } from "react";

type Props = {
  skillCategories: SkillCategory[];
};

export const SkillCategoryAccordion = ({ skillCategories }: Props): ReactElement => {
  const { t } = useTranslationContext();
  return (
    <Stack mt={10} gap={0}>
      {skillCategories.map((category) => (
        <Accordion
          allowToggle
          defaultIndex={skillCategories.map((_, index) => index)}
          key={category.categoryTranslationKey}
        >
          <AccordionItem p={1}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                  {t(category.categoryTranslationKey)}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {category.skills.map((skill) => (
                <Accordion allowMultiple key={skill.name}>
                  <AccordionItem py={1}>
                    <AccordionButton>
                      <Flex width={"100%"} justify="space-between">
                        <Box textAlign="left" minW="80px">
                          {skill.name}
                        </Box>
                        <Flex align="center" columnGap={2} flexShrink={0}>
                          <Tag size={"sm"} p={1}>
                            {t("section.skills.beginner")}
                          </Tag>
                          <Progress
                            hasStripe
                            value={skill.knowledgePercentage}
                            width="20vw"
                            colorScheme={skill.skillColor}
                          />
                          <Tag size={"sm"} p={1}>
                            {t("section.skills.expert")}
                          </Tag>
                        </Flex>
                      </Flex>
                      <AccordionIcon ml={1} />
                    </AccordionButton>
                    <AccordionPanel py={4}>
                      <Flex gap={3} flexWrap="wrap">
                        {skill.informationType === "tags"
                          ? skill.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)
                          : t(skill.textTranslationKey!)}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Stack>
  );
};
