import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement, useRef } from "react";
import { useSize } from "@chakra-ui/react-use-size";

const draw = {
  hidden: { pathLength: 0 },
  visible: (delay: number) => {
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
      },
    };
  },
};

export const AnimatedAxis = (): ReactElement => {
  const viewBoxWidth = 600;
  const viewBoxHeight = 300;
  const viewBoxSize = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;
  const svgContainerRef = useRef(null);
  const svgContainerDimensions = useSize(svgContainerRef);
  const scaleX = (svgContainerDimensions?.width || 1) / viewBoxWidth;
  const scaleY = (svgContainerDimensions?.height || 1) / viewBoxHeight;

  return (
    <Box>
      <Flex position="relative" ref={svgContainerRef}>
        <motion.svg
          viewBox={viewBoxSize}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "all" }}
        >
          <motion.polyline
            fill="none"
            strokeLinejoin="round"
            strokeWidth={3}
            stroke="#88ccca"
            points="80,300 80,200 200,50 300,50"
            variants={draw}
            custom={0.3}
          />
          <motion.polyline
            fill="none"
            strokeLinejoin="round"
            strokeWidth={3}
            stroke="#88ccca"
            points="200,300 200,250 250,190, 300,190"
            variants={draw}
            custom={0.3}
          />
        </motion.svg>
        <Flex
          p={3}
          direction="column"
          rowGap={1}
          position="absolute"
          left={`${300 * scaleX}`}
          top={`${50 * scaleY}`}
          transform={{
            base: "translateY(-50%) translateX(-15%) scale(0.7)",
            md: "translateY(-50%)",
          }}
          scale={1.2}
          borderColor="grassTeal"
          borderWidth={2}
          borderRadius="md"
        >
          <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
            Bachelor of Computer Science
          </Text>
          <Text fontSize={{ base: "x-small", md: "sm" }} fontStyle="italic">
            Oct 2020 - Feb 2024
          </Text>
          <Tag width="fit-content" size="sm">
            Lodz University of Technology
          </Tag>
        </Flex>
        <Flex
          p={3}
          direction="column"
          rowGap={1}
          position="absolute"
          left={`${300 * scaleX}`}
          top={`${190 * scaleY}`}
          transform={{
            base: "translateY(-50%) translateX(-15%) scale(0.7)",
            md: "translateY(-50%)",
          }}
          scale={1.2}
          borderColor="grassTeal"
          borderWidth={2}
          borderRadius="md"
        >
          <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
            Master of Applied Computer Science
          </Text>
          <Text fontSize={{ base: "x-small", md: "sm" }} fontStyle="italic">
            Mar 2024 - Present
          </Text>
          <Tag width="fit-content" size="sm">
            Lodz University of Technology
          </Tag>
        </Flex>
      </Flex>

      <Box>
        <motion.svg
          viewBox={`0 0 ${viewBoxWidth} 30`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <line
            x1="5%"
            y1="15"
            x2="95%"
            y2="15"
            stroke="#88ccca"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <polygon
            strokeLinejoin="round"
            fill="#88ccca"
            strokeWidth={4}
            stroke="#88ccca"
            points="550,5 580,15 550,25"
          />
          <circle cx="200" cy="15" r="10" fill="#88ccca" />
          <circle cx="80" cy="15" r="10" fill="#88ccca" />
        </motion.svg>
      </Box>
    </Box>
  );
};
