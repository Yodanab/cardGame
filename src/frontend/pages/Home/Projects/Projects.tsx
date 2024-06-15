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
      <Card
        className="w-[400px]  p-4 font-mono "
        radius="2xl"
      >
        <h2>Shani's & Idan's Epic Quests!</h2>
        <Divider className="my-4" />
        <TextPRogressWrap>
          Embark on thrilling adventures with
          Shani's and Idan's Projects!
          <br /> Complete Shani's exciting
          challenges to earn legendary treasures,
          and tackle Idan's missions to unlock
          epic rewards.
          <br />
          Each task you finish brings you closer
          to rare and powerful items.
          <br /> Dive in now and conquer the
          quests to see what amazing prizes await
          you!
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "max-w-md",
              track:
                "drop-shadow-md border border-default",
              indicator:
                "bg-gradient-to-r from-pink-500 to-yellow-500",
              label:
                "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="Projects Complete"
            value={65}
            showValueLabel={true}
          />
        </TextPRogressWrap>
      </Card>
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
