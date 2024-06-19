import React from "react";
import styled from "styled-components";

const BookWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Loader = ({
  width = "100px",
  height = "100px",
  text = "Loading...",
}) => {
  return (
    <BookWrap>
      <img
        src="/imgs/bookLoader.gif"
        width={width}
        height={height}
      />
      <span>{text}</span>
    </BookWrap>
  );
};
