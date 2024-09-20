import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
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
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "Consolas",
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const chakraTheme = extendTheme({ config, styles, components, fonts, colors });
export default chakraTheme;
