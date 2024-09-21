import { Box, Container, Flex, Heading, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type LinkProps = {
  href: string;
  active: boolean;
  children?: ReactNode;
};

const NavbarLink = ({ href, active, children }: LinkProps): ReactElement => {
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      href={href}
      p={2}
      bg={active ? "grassTeal" : undefined}
      borderRadius={10}
      color={active ? "#202023" : inactiveColor}
    >
      {children}
    </Link>
  );
};

export const Navbar = (): ReactElement => {
  const location = useLocation();
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
            LOGO
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
          <NavbarLink href="/" active={"/" === location.pathname}>
            Home
          </NavbarLink>
          <NavbarLink href="/experience" active={"/experience" === location.pathname}>
            Experience
          </NavbarLink>
          <NavbarLink href="/skills" active={"/skills" === location.pathname}>
            Skills
          </NavbarLink>
          <NavbarLink href="/contact" active={"/contact" === location.pathname}>
            Contact
          </NavbarLink>
        </Stack>
      </Container>
    </Box>
  );
};
