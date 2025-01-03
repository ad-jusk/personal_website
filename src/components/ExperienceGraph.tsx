import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactElement, useState } from "react";

export const ExperienceGraph = (): ReactElement => {
  const [isDown, setIsDown] = useState(false);
  const svgViewBox = "0 0 300 450";
  const [flashlightWidth, flashlightHeight] = [75, 150];

  return (
    <chakra.svg viewBox={svgViewBox} fill="grassTeal" py={5}>
      <motion.g
        animate={{
          rotate: isDown ? 180 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setIsDown(!isDown)}
        cursor="pointer"
      >
        <path
          transform={`translate(${flashlightWidth}, ${flashlightHeight})`}
          d="M97.5 52.5V135C97.5 138.978 95.9196 142.794 93.1066 145.607C90.2936 148.42 86.4782 150 82.5 150H67.5C63.5218 150 59.7064 148.42 56.8934 145.607C54.0804 142.794 52.5 138.978 52.5 135V52.5L37.5 37.5V22.5H112.5V37.5L97.5 52.5ZM67.5 60V67.5C67.5 69.4891 68.2902 71.3968 69.6967 72.8033C71.1032 74.2098 73.0109 75 75 75C76.9891 75 78.8968 74.2098 80.3033 72.8033C81.7098 71.3968 82.5 69.4891 82.5 67.5V60C82.5 58.0109 81.7098 56.1032 80.3033 54.6967C78.8968 53.2902 76.9891 52.5 75 52.5C73.0109 52.5 71.1032 53.2902 69.6967 54.6967C68.2902 56.1032 67.5 58.0109 67.5 60ZM37.5 0H112.5V15H37.5V0Z"
        />
      </motion.g>
      <motion.polygon
        points="0,0 300,0 180,150 120,150"
        fill="#fdfd96"
        stroke="yellow"
        opacity={0.8}
        animate={{
          opacity: isDown ? 0 : 0.8,
        }}
        transition={{ duration: 0.5, delay: isDown ? 0 : 0.5, ease: "easeInOut" }}
      />
      <motion.polygon
        points="0,450 300,450 180,300 120,300"
        fill="#fdfd96"
        stroke="yellow"
        opacity={0}
        animate={{
          opacity: isDown ? 0.8 : 0,
        }}
        transition={{ duration: 0.5, delay: isDown ? 0.5 : 0, ease: "easeInOut" }}
      />
    </chakra.svg>
  );
};
