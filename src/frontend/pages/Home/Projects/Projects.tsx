import React from "react";
import {
  Card,
  Progress,
  Divider,
} from "@nextui-org/react";
import {
  ProjectsWrap,
  TextPRogressWrap,
} from "./Projects.style";
import { pmsProjectsCard } from "../utils";
import { PmCard } from "frontend/layout/PmCard/PmCard";

export const Projects = () => {
  return (
    <ProjectsWrap>
      {pmsProjectsCard.map((pmCard) => {
        return (
          <span key={pmCard.title}>
            <PmCard
              title={pmCard.title}
              imgSrc={pmCard.imgSrc}
              description={pmCard.description}
              linkUrl={pmCard.linkUrl}
            />
          </span>
        );
      })}
    </ProjectsWrap>
  );
};
