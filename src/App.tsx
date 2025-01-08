import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "@utils/theme";
import { Router } from "@routes/Router";
import { ReactElement } from "react";
import { TranslationProvider } from "@utils/translationContext";

export const App = (): ReactElement => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <TranslationProvider>
        <Router />
      </TranslationProvider>
    </ChakraProvider>
  );
};

export default App;
