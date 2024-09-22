import { useColorModeValue, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { LeafIcon } from "@icons/LeafIcon";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

export const Logo = (): ReactElement => {
  const logoColor = useColorModeValue("#27272A", "#FAFAFA");
  return (
    <Link to="/">
      <LogoBox>
        <LeafIcon fill={logoColor} />
        <Text ml={2} color={logoColor} fontFamily='M PLUS Rounded 1c", sans-serif'>
          Adam Juśkiewicz
        </Text>
      </LogoBox>
    </Link>
  );
};
