import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Progress,
  Stack,
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
    <Stack my={10} gap={5}>
      {skillCategories.map((category) => (
        <Accordion
          allowMultiple
          allowToggle
          defaultIndex={skillCategories.map((_, index) => index)}
          key={category.categoryTranslationKey}
        >
          <AccordionItem p={1} border={"none"}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize={"large"}>
                {t(category.categoryTranslationKey)}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Accordion allowMultiple allowToggle defaultIndex={[0]} variant={"plain"}>
                {category.skills.map((skill) => (
                  <AccordionItem borderColor={"grassTeal"} py={1} key={skill.name}>
                    <AccordionButton>
                      <Flex width={"100%"} justify="left" align={"center"}>
                        <Box textAlign="left" minW="110px" fontWeight="bold">
                          {skill.name}
                        </Box>
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel py={4}>
                      <Flex align={"center"} justify={"center"} mb={10} columnGap={4}>
                        <Tag>{t("section.skills.beginner")}</Tag>
                        <Progress
                          hasStripe
                          isAnimated
                          value={skill.knowledgePercentage}
                          width="50%"
                          colorScheme={skill.skillColor}
                        />
                        <Tag>{t("section.skills.expert")}</Tag>
                      </Flex>
                      <Flex gap={3} flexWrap="wrap" align={"center"} justify={"center"}>
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
