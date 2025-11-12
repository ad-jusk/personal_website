import { Button, Flex, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import MapChart from "@components/MapChart";
import { Page } from "@components/Page";
import { CustomSection } from "@components/section/CustomSection";
import { Socials } from "@components/Socials";
import { HttpError } from "@utils/httpError";
import { useTranslationContext } from "@utils/translationContext";
import { FormEvent, ReactElement, useState } from "react";

const ContactForm = (): ReactElement => {
  const toast = useToast();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { t } = useTranslationContext();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/adam.a.juskiewicz@gmail.com", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      // GITHUB PAGES REQUIRES NO CORS IN FETCH AND THAT MEANS I HAVE NO WAY OF CHECKING
      // RESPONSE. I HAVE HIGH HOPES THAT IT WILL WORK :)
      if (true) {
        toast({
          title: `${t("form.messageSent")}!`,
          description: `${t("form.respondASAP")}!`,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        throw new HttpError("Error while sending email", res.status);
      }
    } catch (err) {
      let description = t("form.error");
      if (err instanceof HttpError) {
        description += ` (HTTP ${err.status})`;
      }
      toast({
        title: `${t("form.oops")}!`,
        description: description,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      as="form"
      onSubmit={(e) => {
        handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
      }}
      direction="column"
      rowGap={2}
      w={{ base: "70%", md: "60%" }}
    >
      <FormControl isRequired>
        <FormLabel>{t("form.name")}</FormLabel>
        <Input name="name" type="text" _hover={{}} borderColor="grassTeal" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>{t("form.email")}</FormLabel>
        <Input name="email" type="email" _hover={{}} borderColor="grassTeal" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>{t("form.message")}</FormLabel>
        <Textarea
          name="message"
          size="xl"
          minH="200px"
          resize="none"
          borderRadius={10}
          _hover={{}}
          p={3}
          borderColor="grassTeal"
        />
      </FormControl>
      {/*INPUTS FOR FORMSUBMIT REGARDING CAPTCHA AND OTHER STUFF*/}
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <Button type="submit" mt={3} mx="auto" bg="grassTeal" _hover={{}} isLoading={isLoading}>
        {`${t("form.send")}!`}
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
