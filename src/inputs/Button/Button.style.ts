/** @format */

import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 50px;
  background: #1e1e1f;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  border: 1px solid white;
  cursor: pointer;
  :after {
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    transform: rotate(10deg);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  :hover {
    :after {
      opacity: 0.7;
      top: -30%;
      left: -30%;
      transition-property: left, top, opacity;
      transition-duration: 0.7s, 0.7s, 0.15s;
      transition-timing-function: ease;
    }
  }
  :active {
    :after {
      opacity: 0;
    }
  }
`;
