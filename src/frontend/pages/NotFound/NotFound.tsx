import React from "react";
import {
  PageWrap,
  Number,
  Text,
} from "./NotFound.style";

export const NotFound = () => {
  return (
    <PageWrap>
      <Number>404</Number>
      <Text>Page Not Found</Text>
    </PageWrap>
  );
};
