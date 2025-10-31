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
              <Accordion allowMultiple allowToggle>
                {category.skills.map((skill) => (
                  <AccordionItem py={1}>
                    <AccordionButton>
                      <Flex width={"100%"} justify="left" align={"center"}>
                        <Box textAlign="left" minW="110px">
                          {skill.name}
                        </Box>
                      </Flex>
                      <AccordionIcon ml={1} />
                    </AccordionButton>
                    <AccordionPanel py={4}>
                      <Flex align={"center"} mb={10} columnGap={4}>
                        <Tag>{t("section.skills.beginner")}</Tag>
                        <Progress
                          hasStripe
                          value={skill.knowledgePercentage}
                          width="20vw"
                          colorScheme={skill.skillColor}
                        />
                        <Tag>{t("section.skills.expert")}</Tag>
                      </Flex>
                      <Flex gap={3} flexWrap="wrap">
                        {skill.informationType === "tags"
                          ? skill.tags?.map((tag) => (
                              <Tag key={tag} color={"grassTeal"}>
                                {tag}
                              </Tag>
                            ))
                          : t(skill.textTranslationKey!)}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Stack>
  );
};
