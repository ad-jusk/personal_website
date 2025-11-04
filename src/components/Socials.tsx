import { Flex, Box, As } from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  iconsDirection?: string;
  iconsPadding?: number;
  iconsJustify?: string;
  iconsSizes?: string[];
};

export const Socials = ({
  iconsDirection = "horizontal",
  iconsPadding = 10,
  iconsJustify = "space-between",
  iconsSizes = ["60px", "80px", "100px"],
}: Props): ReactElement => {
  const socials = [
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      link: "https://pl.linkedin.com/in/adam-juskiewicz",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      link: "https://github.com/ad-jusk",
    },
  ];

  return (
    <Flex w="100%" dir={iconsDirection} justify={iconsJustify} p={iconsPadding}>
      {socials.map((social) => (
        <Link to={social.link} target="blank" key={social.title}>
          <Box
            as={social.icon.type as As | undefined}
            boxSize={iconsSizes}
            fill="grassTeal"
            title={social.title}
            _hover={{ transform: "scale(1.1)", transition: "transform 0.3s" }}
            transition="ease-in-out 0.3s"
          />
        </Link>
      ))}
    </Flex>
  );
};
