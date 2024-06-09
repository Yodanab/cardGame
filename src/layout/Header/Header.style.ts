import styled from "styled-components";
import { backgrounds, text } from "../../core/colors";

export const Container = styled.div`
  width: 100%;
  background: ${backgrounds.menu};
  height: 80px;
  display: flex;
  align-items: center;
  > div {
    height: 50px;
    &:first-child {
      text-align: center;
      line-height: 50px;

      width: 70px;
      border-right: 1px solid white;
      font-size: 50px;
      color: white;
    }
  }
  .title {
    margin-inline: 20px;
    font-weight: 700;
    font-size: 35px;
    line-height: 50px;
    color: white;
  }
`;

export const MenuHeader = styled.ul``;
