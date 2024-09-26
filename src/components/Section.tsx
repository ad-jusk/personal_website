import { Heading } from "@chakra-ui/react";
import { MotionBox } from "@utils/motion";
import { ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Paragraph from "./Paragraph";

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
  paragraphTranslationKey: string;
  childrenBeforeParagraph?: boolean;
  children?: ReactNode;
};

export const Section = (props: SectionProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <MotionBox variants={sectionVariants}>
      <Heading variant="sectionTitle">{t(props.headerTranslationKey)}</Heading>
      {props.childrenBeforeParagraph ? (
        <>
          {props.children}
          <Paragraph>{t(props.paragraphTranslationKey)}</Paragraph>
        </>
      ) : (
        <>
          <Paragraph>{t(props.paragraphTranslationKey)}</Paragraph>
          {props.children}
        </>
      )}
    </MotionBox>
  );
};
