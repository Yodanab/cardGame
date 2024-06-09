import styled from "styled-components";
import { backgrounds, text } from "../../core/colors";

export const Container = styled.div`
  width: 100%;
  background: ${backgrounds.header};
`;

export const MenuHeader = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${text.white};
  font-weight: 500;

  li {
    border-bottom: 2px solid transparent;
    cursor: pointer;
    padding: 15px;
    font-size: 22px;
    margin-inline: 25px;
    &:hover {
      border-bottom-color: #93623b;
      transition: 0.4s;
    }

    &.selected {
      background-color: ${text.white};
      color: #15181d;
      border-bottom-color: #93623b;
      transition: 0.4s;
    }
  }
`;
