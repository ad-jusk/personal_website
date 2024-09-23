import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

type SupportedLanguage = "en" | "pl";

export const LanguageToggleButton = (): ReactElement => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: SupportedLanguage): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label="Change language"
          variant="outline"
          icon={<IoLanguage />}
        />
        <MenuList>
          <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage("pl")}>Polski</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
