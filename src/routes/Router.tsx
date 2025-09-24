import { Navbar } from "@components/Navbar";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { Footer } from "@components/Footer";
import { Box } from "@chakra-ui/react";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box height={12} />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
};
