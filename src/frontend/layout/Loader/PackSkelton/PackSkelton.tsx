import React from "react";
import { Card, Divider } from "@nextui-org/react";
import {
  HeaderWrap,
  ImgSkelton,
  SkeltonWrap,
  TextSkelton,
  ContentWrap,
} from "./PackSkelton.style";

export const PackSkelton = () => {
  return (
    <Card className="w-1/4 p-4">
      <ContentWrap>
        <HeaderWrap>
          <ImgSkelton />
          <div>
            <SkeltonWrap size="s">
              <TextSkelton />
            </SkeltonWrap>

            <SkeltonWrap size="l">
              <TextSkelton />
            </SkeltonWrap>
          </div>
        </HeaderWrap>
        <Divider className="my-4" />
        <div>
          <SkeltonWrap size="xl">
            <TextSkelton />
          </SkeltonWrap>

          <SkeltonWrap size="xl">
            <TextSkelton />
          </SkeltonWrap>
        </div>
      </ContentWrap>
    </Card>
  );
};
