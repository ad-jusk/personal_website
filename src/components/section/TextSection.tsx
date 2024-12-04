import { Heading } from "@chakra-ui/react";
import { MotionBox } from "@utils/motion";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import Paragraph from "../Paragraph";

const sectionVariants = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

type SectionProps = {
  headerTranslationKey: string;
  paragraphTranslationKeys: string[];
};

export const TextSection = (props: SectionProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <MotionBox variants={sectionVariants}>
      <Heading variant="sectionTitle">{t(props.headerTranslationKey)}</Heading>
      {props.paragraphTranslationKeys.map((key) => (
        <Paragraph key={key}>{t(key)}</Paragraph>
      ))}
    </MotionBox>
  );
};
