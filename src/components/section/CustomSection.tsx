import { Heading } from "@chakra-ui/react";
import { MotionBox } from "@utils/motion";
import { ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";

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
  children: ReactNode;
};

export const CustomSection = ({ headerTranslationKey, children }: SectionProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <MotionBox variants={sectionVariants}>
      <Heading variant="sectionTitle">{t(headerTranslationKey)}</Heading>
      {children}
    </MotionBox>
  );
};
