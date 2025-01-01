import { Navbar } from "@components/Navbar";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { Footer } from "@components/Footer";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
};
