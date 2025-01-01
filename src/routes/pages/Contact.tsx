import { Button, Flex, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import MapChart from "@components/MapChart";
import { Page } from "@components/Page";
import { CustomSection } from "@components/section/CustomSection";
import { Socials } from "@components/Socials";
import { useTranslationContext } from "@utils/translationContext";
import { ReactElement } from "react";

const ContactForm = (): ReactElement => {
  const { t } = useTranslationContext();
  return (
    <Flex direction="column" rowGap={2} w={{ base: "70%", md: "60%" }}>
      <FormControl isRequired>
        <FormLabel>{t("form.name")}</FormLabel>
        <Input type="text" _hover={{}} borderColor="grassTeal" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>{t("form.email")}</FormLabel>
        <Input type="email" _hover={{}} borderColor="grassTeal" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>{t("form.message")}</FormLabel>
        <Textarea
          size="xl"
          minH="200px"
          resize="none"
          borderRadius={10}
          _hover={{}}
          p={3}
          borderColor="grassTeal"
        />
      </FormControl>
      <Button mt={3} mx="auto" bg="grassTeal" _hover={{}}>
        Send!
      </Button>
    </Flex>
  );
};

const Contact = (): ReactElement => {
  return (
    <Page animationDuration={0}>
      <Flex direction="column" rowGap={10}>
        <CustomSection
          headerTranslationKey="contact"
          children={
            <Flex alignItems="center" rowGap={10} direction={{ base: "column", md: "row" }}>
              <ContactForm />
              <MapChart />
            </Flex>
          }
        />
        <CustomSection headerTranslationKey="section.headers.socials" children={<Socials />} />
      </Flex>
    </Page>
  );
};

export default Contact;
