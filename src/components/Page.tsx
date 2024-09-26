import { MotionBox } from "@utils/motion";
import { ReactNode, ReactElement } from "react";

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (duration: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      when: "beforeChildren",
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

type PageProps = {
  animationDuration?: number;
  children?: ReactNode;
};

export const Page = ({ animationDuration = 1, children }: PageProps): ReactElement => {
  const variants = {
    hidden: pageVariants.hidden,
    visible: pageVariants.visible(animationDuration),
    exit: pageVariants.exit,
  };
  return (
    <MotionBox variants={variants} initial="hidden" animate="visible" exit="exit">
      {children}
    </MotionBox>
  );
};
