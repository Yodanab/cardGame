import styled, {
  keyframes,
} from "styled-components";

const blinker = keyframes`
  30% {
    opacity: 0.3;
  }
`;

export const ContentWrap = styled.div`
  animation: ${blinker} 2s linear infinite;
`;

export const HeaderWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImgSkelton = styled.div`
  width: 100px;
  height: 80px;
  background-color: #616161;
  border-radius: 5px;
`;

export const TextSkelton = styled.div`
  background-color: #616161;
  border-radius: 5px;
  height: 17px;
  width: 100%;
`;

const wrapSizes = {
  s: "150px",
  m: "200px",
  l: "250px",
  xl: "100%",
};

export const SkeltonWrap = styled.div<{
  size: "s" | "m" | "l" | "xl";
}>`
  width: ${({ size }) => wrapSizes[size]};
  margin-bottom: 12px;
`;
