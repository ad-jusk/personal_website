import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoLanguage } from "react-icons/io5";

// TODO: integrate with i18n
export const LanguageToggleButton = (): ReactElement => {
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
          <MenuItem>English</MenuItem>
          <MenuItem>Polski</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
