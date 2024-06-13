import styled from "styled-components";
import {
  backgrounds,
  text,
} from "../../core/colors";

export const Container = styled.div`
  width: 100%;
  background: ${backgrounds.menu};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 10px;

  .title {
    font-family: monospace;
    font-weight: 700;
    font-size: 24px;
    line-height: 50px;
    color: white;
  }
`;

export const MenuHeader = styled.ul``;
