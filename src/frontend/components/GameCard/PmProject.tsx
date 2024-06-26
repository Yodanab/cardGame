import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

interface PmProject {
  title: string;
  imgSrc: string;
  description: string;
  linkUrl: string;
}

export const PmProject: FC<PmProject> = ({
  title,
  imgSrc,
  description,
  linkUrl,
}) => {
  return (
    <div className="max-w-[450px] ">
      <Card
        isFooterBlurred
        className="w-full h-[500px]"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-white/90 font-medium text-xl font-mono">
            {title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={imgSrc}
          isZoomed
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <p className="text-tiny text-white/60">
              {description}
            </p>
          </div>
          <Button radius="full" size="sm">
            Start Projects
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
