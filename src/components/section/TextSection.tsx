import { Heading } from "@chakra-ui/react";
import { MotionBox } from "@utils/motion";
import { ReactElement } from "react";
import Paragraph from "../Paragraph";
import { useTranslationContext } from "@utils/translationContext";

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
  const { t } = useTranslationContext();

  return (
    <MotionBox variants={sectionVariants}>
      <Heading variant="sectionTitle">{t(props.headerTranslationKey)}</Heading>
      {props.paragraphTranslationKeys.map((key) => (
        <Paragraph key={key}>{t(key)}</Paragraph>
      ))}
    </MotionBox>
  );
};
