import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import NoPage from "../pages/NoPage";

const paths = Object.freeze({
  home: "/",
  skills: "/skills",
  projects: "/projects",
  nopage: "*",
});

const Routes = () => {
  return useRoutes([
    {
      path: paths.home,
      element: <Home />,
    },
    {
      path: paths.skills,
      element: <Skills />,
    },
    {
      path: paths.projects,
      element: <Projects />,
    },
    {
      path: paths.nopage,
      element: <NoPage />,
    },
  ]);
};

export default Routes;
