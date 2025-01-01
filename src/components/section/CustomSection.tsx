import { Heading } from "@chakra-ui/react";
import { MotionBox } from "@utils/motion";
import { useTranslationContext } from "@utils/translationContext";
import { ReactElement, ReactNode } from "react";

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
  const { t } = useTranslationContext();

  return (
    <MotionBox variants={sectionVariants}>
      <Heading variant="sectionTitle">{t(headerTranslationKey)}</Heading>
      {children}
    </MotionBox>
  );
};
