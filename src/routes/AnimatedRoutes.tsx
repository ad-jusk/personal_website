import { AnimatePresence } from "framer-motion";
import { lazy, ReactElement, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

export const AnimatedRoutes = (): ReactElement => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/experience"
          element={
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={null}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
