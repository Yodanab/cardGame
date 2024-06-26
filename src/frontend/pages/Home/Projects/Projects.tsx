import React from "react";
import { ProjectsWrap } from "./Projects.style";
import { pmsProjectsCard } from "../utils";
import { GameCard } from "frontend/components/GameCard/GameCard";

export const Projects = () => {
  return (
    <ProjectsWrap>
      {pmsProjectsCard.map((pmCard) => {
        return (
          <span key={pmCard.title}>
            <GameCard
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
