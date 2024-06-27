import styled from "styled-components";
import {
  backgrounds,
  text,
} from "../../core/colors";

export const MenuContainer = styled.div`
  background: ${backgrounds.menu};
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  > div {
    &.selected {
      svg {
        fill: rgb(0, 111, 238);
      }
    }
    cursor: pointer;
    svg {
      width: 35px;
      height: 35px;
      fill: ${backgrounds.background};
    }
    &:hover svg {
      fill: rgb(0, 111, 238);
    }
  }
`;

export const MobileMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: white;
  font-family: monospace;
  font-size: 20px;
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;
  svg {
    width: 25px;
    height: 25px;
  }

  &.selected {
    color: rgb(0, 111, 238);
  }
  &:hover {
    background-color: #616161;
  }
`;

export const SubMenuHeader = styled.ul`
  background: ${backgrounds.submenu};
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
