import { chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import { useTranslationContext } from "@utils/translationContext";
import { ReactElement } from "react";
import { FaGraduationCap } from "react-icons/fa";

export const EducationGraph = (): ReactElement => {
  const { t } = useTranslationContext();
  return (
    <Flex width="100%">
      <chakra.svg viewBox="0 0 400 240" py={5}>
        <chakra.line x1="20" y1="0" x2="20" y2="240" stroke="grassTeal" strokeWidth={5} />
        <g>
          <chakra.circle cx="20" cy="80" r="18" fill="grassTeal" />
          <chakra.polyline
            points="20,80 50,20 190,20"
            stroke="grassTeal"
            strokeWidth={5}
            fill="none"
          />
          <FaGraduationCap size="25px" x="8.5" y="67.5" />
          <chakra.text x="50" dx="5" y="10" fill="grassTeal" fontSize="10" fontWeight="bold">
            {`03.2024 - ${t("section.experience.present")}`}
          </chakra.text>
          <chakra.text x="50" dx="5" y="30" dy="5" fill="grassTeal" fontSize="10" fontWeight="bold">
            {t("TUL")}
          </chakra.text>
          <chakra.text fill={useColorModeValue("black", "white")}>
            <chakra.tspan x="190" dx="5" y="10" dy="5" fontSize="12" fontWeight="bold">
              {t("section.education.masterDegree")}
            </chakra.tspan>
            <chakra.tspan x="190" dx="5" y="10" dy="20" fontSize="12">
              {`Spec: ${t("section.education.masterSpec")}`}
            </chakra.tspan>
          </chakra.text>
        </g>
        <g>
          <chakra.circle cx="20" cy="160" r="18" fill="grassTeal" />
          <chakra.polyline
            points="20,160 50,100 190,100"
            stroke="grassTeal"
            strokeWidth={5}
            fill="none"
          />
          <FaGraduationCap size="25px" x="8.5" y="147.5" />
          <chakra.text x="50" dx="5" y="90" fill="grassTeal" fontSize="10" fontWeight="bold">
            10.2020 - 03.2024
          </chakra.text>
          <chakra.text
            x="50"
            dx="5"
            y="110"
            dy="5"
            fill="grassTeal"
            fontSize="10"
            fontWeight="bold"
          >
            {t("TUL")}
          </chakra.text>
          <chakra.text fill={useColorModeValue("black", "white")}>
            <chakra.tspan x="190" dx="5" y="90" dy="5" fontSize="12" fontWeight="bold">
              {t("section.education.bachelorDegree")}
            </chakra.tspan>
            <chakra.tspan x="190" dx="5" y="90" dy="20" fontSize="12">
              {`Spec: ${t("section.education.bachelorSpec")}`}
            </chakra.tspan>
          </chakra.text>
        </g>
      </chakra.svg>
    </Flex>
  );
};
