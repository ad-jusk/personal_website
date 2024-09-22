import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "@utils/theme";
import { Router } from "@routes/Router";
import { ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@i18n";

export const App = (): ReactElement => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </ChakraProvider>
  );
};

export default App;
