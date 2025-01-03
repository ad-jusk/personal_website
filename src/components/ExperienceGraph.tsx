import { chakra, useTheme } from "@chakra-ui/react";
import { useTranslationContext } from "@utils/translationContext";
import { motion } from "framer-motion";
import { ReactElement, useState } from "react";
import { FaAlignJustify, FaBug, FaCheck, FaCode, FaNewspaper, FaPaintBrush } from "react-icons/fa";

export const ExperienceGraph = (): ReactElement => {
  const theme = useTheme();
  const textFill = theme.styles.global({ colorMode: "dark" }).body.bg;
  const { t } = useTranslationContext();
  const [isDown, setIsDown] = useState(false);
  const [viewBoxWidth, viewBoxHeight] = [300, 600];
  const [flashlightWidth, flashlightHeight] = [75, 150];

  return (
    <chakra.svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} fill="grassTeal">
      <motion.g
        animate={{
          rotate: isDown ? 180 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setIsDown(!isDown)}
        cursor="pointer"
      >
        <path
          transform={`translate(${viewBoxWidth / 2 - flashlightWidth}, ${viewBoxHeight / 2 - flashlightHeight / 2})`}
          d="M97.5 52.5V135C97.5 138.978 95.9196 142.794 93.1066 145.607C90.2936 148.42 86.4782 150 82.5 150H67.5C63.5218 150 59.7064 148.42 56.8934 145.607C54.0804 142.794 52.5 138.978 52.5 135V52.5L37.5 37.5V22.5H112.5V37.5L97.5 52.5ZM67.5 60V67.5C67.5 69.4891 68.2902 71.3968 69.6967 72.8033C71.1032 74.2098 73.0109 75 75 75C76.9891 75 78.8968 74.2098 80.3033 72.8033C81.7098 71.3968 82.5 69.4891 82.5 67.5V60C82.5 58.0109 81.7098 56.1032 80.3033 54.6967C78.8968 53.2902 76.9891 52.5 75 52.5C73.0109 52.5 71.1032 53.2902 69.6967 54.6967C68.2902 56.1032 67.5 58.0109 67.5 60ZM37.5 0H112.5V15H37.5V0Z"
        />
      </motion.g>
      <motion.g
        opacity={0.8}
        animate={{
          opacity: isDown ? 0 : 0.8,
        }}
        transition={{ duration: 0.5, delay: isDown ? 0 : 0.5, ease: "easeInOut" }}
      >
        <polygon
          points={`0,0 ${viewBoxWidth},0 ${viewBoxWidth / 2 + flashlightWidth / 2},${viewBoxHeight / 2 - flashlightHeight / 2} ${viewBoxWidth / 2 - flashlightWidth / 2},${viewBoxHeight / 2 - flashlightHeight / 2}`}
          fill="#fdfd96"
          stroke="yellow"
        />
      </motion.g>
      <motion.g
        opacity={0}
        animate={{
          opacity: isDown ? 0.8 : 0,
        }}
        transition={{ duration: 0.5, delay: isDown ? 0.5 : 0, ease: "easeInOut" }}
      >
        <polygon
          points={`0,${viewBoxHeight} ${viewBoxWidth},${viewBoxHeight} ${viewBoxWidth / 2 + flashlightWidth / 2},${viewBoxHeight / 2 + flashlightHeight / 2} ${viewBoxWidth / 2 - flashlightWidth / 2},${viewBoxHeight / 2 + flashlightHeight / 2}`}
          fill="#fdfd96"
          stroke="yellow"
        />
      </motion.g>
      {/* Text top */}
      <motion.g
        opacity={1}
        animate={{
          opacity: isDown ? 0 : 1,
        }}
        transition={{ duration: 0.5, delay: isDown ? 0 : 0.5, ease: "easeInOut" }}
      >
        <chakra.text
          x={viewBoxWidth / 2}
          y={25}
          textAnchor="middle"
          fill={textFill}
          fontWeight={"bold"}
        >
          Junior Java Developer
        </chakra.text>
        <chakra.text
          x={viewBoxWidth / 2}
          y={45}
          textAnchor="middle"
          fontSize={"sm"}
          fill={textFill}
        >
          {t("section.experience.at")}
        </chakra.text>
        <chakra.text
          x={viewBoxWidth / 2}
          y={65}
          textAnchor="middle"
          fill={textFill}
          fontWeight={"bold"}
        >
          Pixel Technology
        </chakra.text>
        <chakra.text
          x={viewBoxWidth / 2}
          y={85}
          textAnchor="middle"
          fill={textFill}
          fontSize={"sm"}
        >
          {t("section.experience.workingOn")}
        </chakra.text>
        <chakra.text
          x={viewBoxWidth / 2}
          y={105}
          textAnchor="middle"
          fill={textFill}
          fontWeight={"bold"}
        >
          {t("section.experience.medicalImageViewer")}
        </chakra.text>
        <chakra.text
          x={viewBoxWidth / 2}
          y={150}
          textAnchor="middle"
          fill={textFill}
          fontSize={"sm"}
          fontStyle={"italic"}
        >
          {`08.2022 -${t("section.experience.present")}`}
        </chakra.text>
      </motion.g>
      {/* Text bottom */}
      <motion.g
        opacity={0}
        animate={{
          opacity: isDown ? 1 : 0,
        }}
        transition={{ duration: 0.5, delay: isDown ? 0.5 : 0, ease: "easeInOut" }}
      >
        <chakra.text
          x={viewBoxWidth / 2}
          y={400}
          textAnchor="middle"
          fill={textFill}
          fontSize={"sm"}
          fontWeight={"bold"}
        >
          {t("section.experience.myTasks")}
        </chakra.text>
        <g transform={`translate(${viewBoxWidth / 2}, 420)`}>
          <FaBug size={14} x={-50} y={0} fill={textFill} />
          <chakra.text x={5} y={12} textAnchor="middle" fill={textFill} fontSize={14}>
            {t("section.experience.bugFixing")}
          </chakra.text>
        </g>
        <g transform={`translate(${viewBoxWidth / 2}, 450)`}>
          <FaAlignJustify size={14} x={-65} y={0} fill={textFill} />
          <chakra.text x={10} y={12} textAnchor="middle" fill={textFill} fontSize={14}>
            {t("section.experience.codeRefactoring")}
          </chakra.text>
        </g>
        <g transform={`translate(${viewBoxWidth / 2}, 480)`}>
          <FaNewspaper size={14} x={-80} y={0} fill={textFill} />
          <chakra.text x={15} y={12} textAnchor="middle" fill={textFill} fontSize={14}>
            {t("section.experience.documentationWriting")}
          </chakra.text>
        </g>
        <g transform={`translate(${viewBoxWidth / 2}, 510)`}>
          <FaCheck size={14} x={-95} y={0} fill={textFill} />
          <chakra.text x={15} y={12} textAnchor="middle" fill={textFill} fontSize={14}>
            {t("section.experience.testing")}
          </chakra.text>
        </g>
        <g transform={`translate(${viewBoxWidth / 2}, 540)`}>
          <FaPaintBrush size={14} x={-110} y={0} fill={textFill} />
          <chakra.text x={8} y={12} textAnchor="middle" fill={textFill} fontSize={14}>
            {t("section.experience.ux")}
          </chakra.text>
        </g>
        <g transform={`translate(${viewBoxWidth / 2}, 570)`}>
          <FaCode size={14} x={-125} y={0} fill={textFill} />
          <chakra.text x={10} y={12} textAnchor="middle" fill={textFill} fontSize={14}>
            {t("section.experience.newFeatures")}
          </chakra.text>
        </g>
      </motion.g>
    </chakra.svg>
  );
};
