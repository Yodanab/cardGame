/** @format */

import styled from "styled-components";

export const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginModal = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-image: url(https://www.didoocovers.com/wp-content/uploads/2023/12/card_bg.png);
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 3.8rem 0;
  z-index: 2;
  transition: 200ms ease-in;
  padding-top: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.div`
  color: white;
  font-family: fantasy;
  font-size: 50px;
`;

export const CreateAccount = styled.div`
  color: white;
  span {
    cursor: pointer;
    margin-left: 5px;
    &:hover {
      color: #afafeb;
    }
  }
`;
