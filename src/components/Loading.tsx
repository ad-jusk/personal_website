import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useTranslationContext } from "@utils/translationContext";
import { ReactElement } from "react";

type Props = {
  width?: string | number;
  height?: string | number;
};

export const Loading = ({ width = "fit-content", height = "fit-content" }: Props): ReactElement => {
  const { t } = useTranslationContext();
  return (
    <Flex
      width={width}
      height={height}
      maxW={{ base: "60ch", md: "90ch" }}
      align="center"
      justify="center"
      mx="auto"
    >
      <Flex boxSize="fit-content" direction="column" alignItems="center" rowGap={5}>
        <Spinner size="xl" color="grassTeal" borderWidth={8} />
        <Text fontSize="x-large" color="grassTeal" fontWeight="bold">
          {t("loading")}
        </Text>
      </Flex>
    </Flex>
  );
};
