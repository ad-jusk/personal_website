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
import { ReactElement, ReactNode } from "react";
import { Logo } from "./Logo";
import ThemeToggleButton from "./ThemeToggleButton";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LanguageToggleButton } from "./LanguageToggleButton";
import { HamburgerIcon } from "@chakra-ui/icons";

type LinkProps = {
  href: string;
  children?: ReactNode;
};

const NavbarLink = ({ href, children }: LinkProps): ReactElement => {
  const location = useLocation();
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
      {children}
    </Link>
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
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/experience">Experience</NavbarLink>
          <NavbarLink href="/skills">Skills</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
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
                <MenuItem as={RouterLink} to="/">
                  Home
                </MenuItem>
                <MenuItem as={RouterLink} to="/experience">
                  Experience
                </MenuItem>
                <MenuItem as={RouterLink} to="/skills">
                  Skills
                </MenuItem>
                <MenuItem as={RouterLink} to="/contact">
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
