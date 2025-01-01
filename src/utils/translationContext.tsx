import i18n from "@i18n";
import { i18n as i18nType, TFunction } from "i18next";
import { createContext, ReactNode, useContext } from "react";
import { useTranslation } from "react-i18next";

type TranslationValue = {
  t: TFunction<"translation", undefined>;
  i18n: i18nType;
};

type TranslationProviderProps = {
  children: ReactNode;
};

const TranslationContext = createContext<TranslationValue>({} as TranslationValue);

export const TranslationProvider = ({ children }: TranslationProviderProps): JSX.Element => {
  const { t } = useTranslation();
  return <TranslationContext.Provider value={{ t, i18n }}>{children}</TranslationContext.Provider>;
};

export const useTranslationContext = (): TranslationValue => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslationContext must be used within a TranslationContextProvider");
  }
  return context;
};
