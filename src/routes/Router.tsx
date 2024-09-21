import { Navbar } from "@components/Navbar";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./AnimatedRoutes";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};
