import React from "react";
import { Divider } from "@nextui-org/react";
import { Projects } from "./Projects/projects";

export const Home = () => {
  return (
    <>
      <Projects />
      <Divider className="my-5" />
    </>
  );
};
