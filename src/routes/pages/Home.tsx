import Paragraph from "@components/Paragraph";
import { ReactElement } from "react";
import { Box, chakra, Container, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

// TODO: FRAMER MOTION
const MotionBox = chakra(motion.div);

const Home = (): ReactElement => {
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.5 } }}>
      <Container maxW={{ base: "60ch", md: "80ch" }}>
        <Box display={{ md: "flex" }}>
          <Flex flexGrow={1} direction="column" rowGap={1}>
            <Heading>Adam Juśkiewicz</Heading>
            <Box
              borderRadius="lg"
              bg={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
              css={{ backdropFilter: "blur(10px)" }}
              textAlign="center"
              maxW="fit-content"
              px={2}
              zIndex={-1}
            >
              <p>Fullstack Software Developer</p>
            </Box>
          </Flex>
          <Box flexShrink={0} textAlign="center" mt={{ base: 8, md: 0 }}>
            <Box
              borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            />
          </Box>
        </Box>
        <Heading variant="sectionTitle">About me</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum risus urna, vel
          dictum nisi porta non. Sed vulputate felis ac sapien pharetra ornare. Praesent tincidunt
          est nec ex faucibus, rhoncus pharetra tellus lacinia. Donec fringilla urna nisi. Quisque
          ultricies hendrerit viverra. Maecenas volutpat semper erat, lacinia scelerisque tortor.
          Morbi consequat mauris lacus, at sollicitudin nunc fringilla a. Nulla non scelerisque dui,
          eget efficitur dolor. Proin tempus malesuada urna, sit amet pharetra tellus feugiat in.
          Quisque imperdiet, justo at aliquet tempor, odio nibh vehicula lacus, vel viverra est
          lectus sed ante.
        </Paragraph>
      </Container>
    </MotionBox>
  );
};

export default Home;
