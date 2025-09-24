import { Loading } from "@components/Loading";
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
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading height="100vh" />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/experience"
          element={
            <Suspense fallback={<Loading height="100vh" />}>
              <Experience />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<Loading height="100vh" />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<Loading height="100vh" />}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading height="100vh" />}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
