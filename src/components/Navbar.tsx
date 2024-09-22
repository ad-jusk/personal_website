import { Box, Container, Flex, Heading, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Logo } from "./Logo";
import ThemeToggleButton from "./ThemeToggleButton";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LanguageToggleButton } from "./LanguageToggleButton";

type LinkProps = {
  href: string;
  children?: ReactNode;
};

const NavbarLink = ({ href, children }: LinkProps): ReactElement => {
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const [isActive, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => setActive(href === location.pathname), [location.pathname]);

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

        <Box flex={1} alignItems="right">
          <ThemeToggleButton />

          <Box display="inline-block" ml={2}>
            <LanguageToggleButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
