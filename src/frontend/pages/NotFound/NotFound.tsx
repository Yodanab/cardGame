import React from "react";
import {
  ContentWrap,
  Number,
  Text,
  PageWrap,
} from "./NotFound.style";

export const NotFound = () => {
  return (
    <PageWrap>
      <ContentWrap>
        <img width={300} src="/imgs/404.png" />
        <div>
          <Number>404</Number>
          <Text>Page Not Found</Text>
        </div>
      </ContentWrap>
    </PageWrap>
  );
};
