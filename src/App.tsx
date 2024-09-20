import { ChakraProvider, Heading } from "@chakra-ui/react";
import chakraTheme from "@lib/theme";
import { ReactElement } from "react";

export const App = (): ReactElement => {

  return (
    <ChakraProvider theme={chakraTheme}>
      <Heading variant={"sectionTitle"}>HELLO</Heading>
    </ChakraProvider>
  );
};

export default App;
