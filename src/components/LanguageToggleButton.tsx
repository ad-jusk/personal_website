import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useTranslationContext } from "@utils/translationContext";
import { ReactElement } from "react";
import { IoLanguage } from "react-icons/io5";

type SupportedLanguage = "en" | "pl" | "es";

export const LanguageToggleButton = (): ReactElement => {
  const { i18n } = useTranslationContext();

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
          <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
