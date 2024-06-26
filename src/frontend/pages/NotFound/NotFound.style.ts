import styled, {
  keyframes,
} from "styled-components";

const blinker = keyframes`
  30% {
    opacity: 0.3;
  }
`;

export const PageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Number = styled.div`
  font-size: 150px;
  font-family: monospace;
  line-height: 130px;
  animation: ${blinker} 2s linear infinite;
`;

export const Text = styled.div`
  font-size: 35px;
  font-family: monospace;
`;
