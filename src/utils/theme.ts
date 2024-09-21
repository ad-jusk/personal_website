import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#FFF4E4", "#3A2E39")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      sectionTitle: {
        textDecoration: "underline",
        fontSize: 24,
        textUnderlineOffset: 9,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 4,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode("#3D7AED", "#FF63C3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88CCCA",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const chakraTheme = extendTheme({ config, styles, components, fonts, colors });
export default chakraTheme;
