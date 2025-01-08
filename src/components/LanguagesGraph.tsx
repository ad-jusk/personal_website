import { chakra } from "@chakra-ui/react";
import { useTranslationContext } from "@utils/translationContext";
import { motion } from "framer-motion";
import { ReactElement } from "react";

const flagGroupVariants = {
  hidden: (x: number) => ({
    opacity: 0,
    x,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
    },
  },
};

export const LanguagesGraph = (): ReactElement => {
  const { t } = useTranslationContext();
  return (
    <chakra.svg viewBox="0 0 1280 1187" fill="grassTeal">
      <motion.g variants={flagGroupVariants} initial="hidden" custom={300} whileInView="visible">
        <image x="0" y="40" width="640" height="400" href="./flags/pl.png" />
        <chakra.line
          x1="720"
          y1="240"
          x2="1200"
          y2="240"
          stroke="grassTeal"
          strokeWidth={10}
          strokeDasharray={10}
        />
        <chakra.text x="720" y="240" dy="-30" fontSize="64" fontWeight="bold">
          {t("section.languages.polish")}
        </chakra.text>
        <chakra.text x="1200" y="240" dy="70" fontSize="64" fontWeight="bold" textAnchor="end">
          {t("section.languages.native")}
        </chakra.text>
      </motion.g>
      <motion.g variants={flagGroupVariants} initial="hidden" custom={-300} whileInView="visible">
        <image x="640" y="440" width="640" height="320" href="./flags/gb.png" />
        <chakra.line
          x1="80"
          y1="600"
          x2="560"
          y2="600"
          stroke="grassTeal"
          strokeWidth={10}
          strokeDasharray={10}
        />
        <chakra.text x="80" y="600" dy="-30" fontSize="64" fontWeight="bold">
          {t("section.languages.english")}
        </chakra.text>
        <chakra.text x="560" y="600" dy="70" fontSize="64" fontWeight="bold" textAnchor="end">
          C1
        </chakra.text>
      </motion.g>
      <motion.g variants={flagGroupVariants} initial="hidden" custom={300} whileInView="visible">
        <image x="0" y="760" width="640" height="427" href="./flags/es.png" />
        <chakra.line
          x1="720"
          y1="973.5"
          x2="1200"
          y2="973.5"
          stroke="grassTeal"
          strokeWidth={10}
          strokeDasharray={10}
        />
        <chakra.text x="720" y="973.5" dy="-30" fontSize="64" fontWeight="bold">
          {t("section.languages.spanish")}
        </chakra.text>
        <chakra.text x="1200" y="973.5" dy="70" fontSize="64" fontWeight="bold" textAnchor="end">
          B1
        </chakra.text>
      </motion.g>
    </chakra.svg>
  );
};
