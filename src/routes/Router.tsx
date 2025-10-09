import { Navbar } from "@components/Navbar";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { Footer } from "@components/Footer";
import { GlbModelContainer } from "@components/models/GlbModelContainer";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
      <GlbModelContainer />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
};
