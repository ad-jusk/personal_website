import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "@utils/theme";
import { Router } from "@routes/Router";
import { ReactElement } from "react";

export const App = (): ReactElement => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Router />
    </ChakraProvider>
  );
};

export default App;
