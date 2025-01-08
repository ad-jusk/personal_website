import { Box } from "@chakra-ui/react";
import { useTranslationContext } from "@utils/translationContext";
import { ReactElement } from "react";

export const Footer = (): ReactElement => {
  const { t } = useTranslationContext();
  return (
    <Box textAlign="center" fontSize="sm" p={10}>
      &copy; {`${new Date().getFullYear()} ${t("copyright")}`}
    </Box>
  );
};
