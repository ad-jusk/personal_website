import { Box, Flex, Text, Divider, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

export const Timeline = (): ReactElement => {
  const timelineData = [
    { label: "Step 1", description: "This is the first step", date: "2024-12-01" },
    { label: "Step 2", description: "This is the second step", date: "2024-12-02" },
  ];

  return (
    <Box py={5}>
      {timelineData.map((item, index) => (
        <Flex key={index}>
          <Flex direction="column" mr={4} align="center">
            <Box boxSize={5} bg="grassTeal" borderRadius="50%" flexShrink={0} />
            <Divider orientation="vertical" borderWidth="2px" borderColor="grassTeal" opacity={1} />
          </Flex>
          <VStack align={"start"} mb={8}>
            <Text fontWeight="bold" fontSize="lg" lineHeight={1}>
              {item.label}
            </Text>
            <Text fontSize="md" lineHeight={1}>
              {item.date}
            </Text>
            <Text mt={2}>{item.description}</Text>
          </VStack>
        </Flex>
      ))}
    </Box>
  );
};
