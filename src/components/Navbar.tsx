import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Logo } from "./Logo";
import ThemeToggleButton from "./ThemeToggleButton";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LanguageToggleButton } from "./LanguageToggleButton";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

type LinkProps = {
  href: string;
  translationKey: string;
};

const NavbarLink = ({ href, translationKey }: LinkProps): ReactElement => {
  const location = useLocation();
  const { t } = useTranslation();
  const isActive = location.pathname === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Link
      as={RouterLink}
      to={href}
      p={2}
      bg={isActive ? "grassTeal" : undefined}
      borderRadius={10}
      color={isActive ? "#202023" : inactiveColor}
    >
      {t(translationKey)}
    </Link>
  );
};

const MenuLink = ({ href, translationKey }: LinkProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <MenuItem as={RouterLink} to={href}>
      {t(translationKey)}
    </MenuItem>
  );
};

export const Navbar = (): ReactElement => {
  return (
    <Box
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex align="center">
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          justify="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavbarLink href="/experience" translationKey="experience" />
          <NavbarLink href="/projects" translationKey="projects" />
          <NavbarLink href="/skills" translationKey="skills" />
          <NavbarLink href="/contact" translationKey="contact" />
        </Stack>

        <Flex flex={1} justify="right">
          <ThemeToggleButton />
          <Box display="inline-block" ml={2}>
            <LanguageToggleButton />
          </Box>
          <Box display={{ base: "inline-block", md: "none" }} ml={2}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Context menu"
              />
              <MenuList>
                <MenuLink href="/experience" translationKey="experience" />
                <MenuLink href="/projects" translationKey="projects" />
                <MenuLink href="/skills" translationKey="skills" />
                <MenuLink href="/contact" translationKey="contact" />
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
