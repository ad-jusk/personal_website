import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#eeeeee", "#3a2e39")(props),
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "::-webkit-scrollbar": {
      width: "3px",
      background: "transparent",
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "::-webkit-scrollbar-thumb": {
      width: "3px",
      borderRadius: "10px",
      background: "grassTeal",
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
        textDecorationColor: "grassTeal",
        textDecorationThickness: 4,
        marginTop: 6,
        marginBottom: 6,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
  Tag: {
    sizes: {
      xs: {
        container: {
          fontSize: "8px",
          paddingX: "1",
          paddingY: "1",
        },
      },
    },
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
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
