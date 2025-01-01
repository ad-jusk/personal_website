import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const Footer = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Box textAlign="center" fontSize="sm" p={10}>
      &copy; {`${new Date().getFullYear()} ${t("copyright")}`}
    </Box>
  );
};
