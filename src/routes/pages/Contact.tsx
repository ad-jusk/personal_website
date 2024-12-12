import { Button, Flex, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import MapChart from "@components/MapChart";
import { Page } from "@components/Page";
import { CustomSection } from "@components/section/CustomSection";
import { ReactElement } from "react";

const ContactForm = (): ReactElement => {
  return (
    <Flex direction="column" w={{ base: "70%", md: "60%" }}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" _hover={{}} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" _hover={{}} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Your message</FormLabel>
        <Textarea size="xl" minH="200px" resize="none" borderRadius={10} _hover={{}} p={3} />
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
      <CustomSection
        headerTranslationKey="contact"
        children={
          <Flex alignItems="center" rowGap={10} direction={{ base: "column", md: "row" }}>
            <ContactForm />
            <MapChart />
          </Flex>
        }
      />
    </Page>
  );
};

export default Contact;
