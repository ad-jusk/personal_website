import { Box, Flex, Text, Divider, VStack, Tag } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const EducationTimeline = (): ReactElement => {
  const { t } = useTranslation();
  const timelineData = [
    {
      label: "Bachelor of Computer Science",
      description: "This is the first step",
      date: "2020.10 - 2024.02",
    },
    {
      label: "Master of Applied Computer Science",
      description: "This is the second step",
      date: "2024.03 - present",
    },
  ];

  return (
    <Box py={3}>
      {timelineData.map((item, index) => (
        <Flex key={index}>
          <Flex direction="column" mr={4} align="center">
            <Box
              boxSize={5}
              borderColor="grassTeal"
              borderWidth={4}
              bg="transparent"
              borderRadius="50%"
              flexShrink={0}
            />
            <Divider
              my={-0.5}
              orientation="vertical"
              borderWidth={2}
              borderColor="grassTeal"
              opacity={1}
            />
          </Flex>
          <VStack align="start" gap={3} mb={10}>
            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} lineHeight={1}>
              {item.label}
            </Text>
            <Text fontSize="md" fontStyle="italic" lineHeight={1}>
              {item.date}
            </Text>
            <Tag fontSize="smaller">{t("TUL")}</Tag>
            <Text>{t("section.paragraphs.loremMin")}</Text>
          </VStack>
        </Flex>
      ))}
    </Box>
  );
};
