import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const MainWrapper = styled.div`
  flex-grow: 1;
`;

export const ContentWrap = styled.div`
  height: calc(100% - 50px);
  overflow: auto;
  padding: 20px;
`;
