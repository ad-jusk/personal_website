import { chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import { MotionText } from "@utils/motion";
import { useTranslationContext } from "@utils/translationContext";
import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useState } from "react";

// SVG 100 x 100
const gamePad =
  "M79.5 27.5C76.5 22.5 71 20 65 20H35C29 20 23.5 22.5 20.5 27.5C8.99998 45 6.49998 71.5 14.5 77C22.5 82.5 40.5 58.5 50 58.5C59.5 58.5 77 82.5 85.5 77C93.5 71.5 91 45 79.5 27.5ZM40 45H35V50H30V45H25V40H30V35H35V40H40V45ZM67 47.5C67 50 65 52 62.5 52C60 52 58 50 58 47.5C58 45 60 43 62.5 43C65 43 67 45 67 47.5ZM76.5 37.5C76.5 40 74.5 42 72 42C69.5 42 67.5 40 67.5 37.5C67.5 35 69.5 33 72 33C74.5 33 76.5 35 76.5 37.5Z";
const barbell =
  "M91.2109 34.375C90.2494 34.3437 89.295 34.5502 88.4324 34.9761C87.5697 35.4019 86.8255 36.0341 86.2656 36.8164C86.2181 36.8845 86.1501 36.9357 86.0715 36.9625C85.9929 36.9893 85.9078 36.9904 85.8286 36.9656C85.7493 36.9408 85.68 36.8913 85.6308 36.8245C85.5815 36.7576 85.5549 36.6768 85.5547 36.5937V29.4355C85.5547 25.3828 82.3633 21.9726 78.3125 21.8769C77.3223 21.8519 76.3372 22.0253 75.4151 22.387C74.493 22.7486 73.6526 23.2912 72.9435 23.9827C72.2344 24.6741 71.6708 25.5006 71.286 26.4133C70.9013 27.3259 70.7031 28.3064 70.7031 29.2969V45.3125C70.7031 45.4161 70.662 45.5154 70.5887 45.5887C70.5155 45.662 70.4161 45.7031 70.3125 45.7031H29.6875C29.5839 45.7031 29.4845 45.662 29.4113 45.5887C29.338 45.5154 29.2969 45.4161 29.2969 45.3125V29.4355C29.2969 25.3828 26.1055 21.9726 22.0547 21.8769C21.0652 21.853 20.0809 22.0272 19.1597 22.3893C18.2385 22.7514 17.3991 23.2941 16.6908 23.9855C15.9825 24.6769 15.4196 25.503 15.0353 26.4151C14.651 27.3273 14.4531 28.3071 14.4531 29.2969V36.5976C14.4529 36.6807 14.4263 36.7615 14.377 36.8284C14.3278 36.8952 14.2585 36.9447 14.1792 36.9695C14.1 36.9943 14.0149 36.9932 13.9363 36.9664C13.8577 36.9396 13.7897 36.8884 13.7422 36.8203C13.182 36.0361 12.4367 35.4025 11.5726 34.9759C10.7084 34.5493 9.75224 34.3429 8.78906 34.375C5.60547 34.4746 3.125 37.1699 3.125 40.3555V59.6367C3.125 62.8223 5.61328 65.5176 8.78906 65.6172C9.75059 65.6484 10.705 65.442 11.5676 65.0161C12.4303 64.5902 13.1745 63.9581 13.7344 63.1758C13.7808 63.1038 13.8495 63.049 13.9301 63.0199C14.0106 62.9908 14.0985 62.989 14.1802 63.0147C14.2619 63.0405 14.3329 63.0924 14.3822 63.1624C14.4315 63.2324 14.4564 63.3167 14.4531 63.4023V70.5644C14.4531 74.6094 17.6445 78.0273 21.6953 78.125C22.685 78.149 23.6694 77.9747 24.5908 77.6125C25.5121 77.2502 26.3516 76.7073 27.0599 76.0157C27.7682 75.3242 28.3311 74.4978 28.7152 73.5855C29.0994 72.6731 29.2972 71.6931 29.2969 70.7031V54.6875C29.2969 54.5839 29.338 54.4845 29.4113 54.4113C29.4845 54.338 29.5839 54.2969 29.6875 54.2969H70.3125C70.4161 54.2969 70.5155 54.338 70.5887 54.4113C70.662 54.4845 70.7031 54.5839 70.7031 54.6875V70.5644C70.7031 74.6172 73.8945 78.0273 77.9453 78.123C78.9348 78.147 79.9191 77.9728 80.8403 77.6107C81.7615 77.2486 82.6009 76.7058 83.3092 76.0145C84.0175 75.3231 84.5804 74.497 84.9647 73.5849C85.3489 72.6727 85.5469 71.6929 85.5469 70.7031V63.4023C85.5471 63.3193 85.5737 63.2385 85.623 63.1716C85.6722 63.1047 85.7415 63.0553 85.8208 63.0305C85.9 63.0057 85.9851 63.0067 86.0637 63.0336C86.1423 63.0604 86.2103 63.1116 86.2578 63.1797C86.818 63.9639 87.5633 64.5974 88.4274 65.024C89.2916 65.4507 90.2478 65.6571 91.2109 65.625C94.3945 65.5254 96.875 62.8301 96.875 59.6445V40.3594C96.875 37.1738 94.3867 34.4785 91.2109 34.375Z";
const note =
  "M60.1196 8.0777C54.8392 7.46179 49.8287 10.5583 48.0183 15.5565C47.6104 16.6829 47.4671 17.9007 47.4 19.1773C47.3496 20.1403 47.3371 21.2883 47.3346 22.6403L47.3333 24.5361C47.3333 24.5561 47.3333 24.5761 47.3333 24.596V58.2065C43.7929 54.8836 39.03 52.8486 33.7917 52.8486C22.861 52.8486 14 61.7095 14 72.6403C14 83.5711 22.861 92.4319 33.7917 92.4319C44.7225 92.4319 53.5833 83.5711 53.5833 72.6403V36.0177C54.02 36.2505 54.4929 36.4868 55.0112 36.7456L66.2925 42.3861C68.0354 43.2574 69.4537 43.9665 70.6158 44.4732C71.7875 44.984 72.9408 45.4007 74.1308 45.5395C79.4108 46.1553 84.4212 43.0586 86.2317 38.0607C86.64 36.9342 86.7829 35.7164 86.8504 34.4398C86.9167 33.1739 86.9167 31.5883 86.9167 29.6398L86.9171 29.2947C86.9175 27.8457 86.9179 26.7122 86.7125 25.638C86.1833 22.873 84.6546 20.3996 82.4183 18.6897C81.5492 18.0254 80.5354 17.519 79.2392 16.8715L67.9579 11.2311C66.215 10.3596 64.7967 9.65045 63.6346 9.14387C62.4629 8.63304 61.3096 8.2165 60.1196 8.0777Z";

type Hobby = {
  path: string;
  captionTranslateKey: string;
};

const hobbies: Hobby[] = [
  {
    path: gamePad,
    captionTranslateKey: "section.hobbies.games",
  },
  {
    path: barbell,
    captionTranslateKey: "section.hobbies.gym",
  },
  {
    path: note,
    captionTranslateKey: "section.hobbies.music",
  },
];

const selectedPathVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const Hobbies = (): ReactElement => {
  const { t } = useTranslationContext();
  const hobbySvgBgColor = useColorModeValue("gray.200", "gray.600");
  const [selectedHobbyIndex, setSelectedHobbyIndex] = useState<number>(0);

  return (
    <Flex width="100%" direction="column" align="center">
      <Flex width="100%" height="300px" align="center" textAlign="center" direction="column">
        <AnimatePresence mode="wait">
          <motion.svg
            key={selectedHobbyIndex}
            width="200px"
            height="200px"
            viewBox="0 0 200 200"
            variants={selectedPathVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
          >
            <g transform="scale(2)">
              <chakra.path d={hobbies[selectedHobbyIndex].path} fill="grassTeal" />
            </g>
          </motion.svg>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <MotionText
            key={`${selectedHobbyIndex}_text`}
            variants={selectedPathVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            fontSize="lg"
            fontWeight="bold"
            maxW="80%"
          >
            {t(hobbies[selectedHobbyIndex].captionTranslateKey)}
          </MotionText>
        </AnimatePresence>
      </Flex>
      <Flex mt={{ base: 5, md: 0 }} columnGap={5}>
        {hobbies.map((hobby, index) => (
          <chakra.svg
            key={index}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="grassTeal"
            p={1}
            bgColor={selectedHobbyIndex == index ? hobbySvgBgColor : "none"}
            borderRadius="50%"
            transition="0.5s ease-in-out"
            onClick={() => setSelectedHobbyIndex(index)}
            _hover={{
              cursor: "pointer",
              transform: selectedHobbyIndex == index ? "" : "scale(1.1)",
              bgColor: hobbySvgBgColor,
              transition: "0.5s ease-in-out",
            }}
          >
            <path d={hobby.path} />
          </chakra.svg>
        ))}
      </Flex>
    </Flex>
  );
};
