import styled from "styled-components";

export const AvatarsWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  img {
    cursor: pointer;
    &.selected {
      outline: 2px solid;
    }
  }
`;
