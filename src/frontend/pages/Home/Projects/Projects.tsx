import React from "react";
import { ProjectsWrap } from "./Projects.style";
import { pmsProjectsCard } from "../utils";
import { PmProject } from "frontend/components/GameCard/PmProject";

export const Projects = () => {
  return (
    <ProjectsWrap>
      {pmsProjectsCard.map((pmCard) => {
        return (
          <span key={pmCard.title}>
            <PmProject
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
