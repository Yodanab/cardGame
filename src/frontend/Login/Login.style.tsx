import styled from "styled-components";

export const LoginWrap = styled.div`
  width: 100%;
  form {
    position: relative;
  }
`;

export const LoginModal = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  height: 100vh;
  width: 400px;
  justify-content: center;
`;

export const Title = styled.div`
  color: white;
  font-family: monospace;
  font-size: 50px;
`;

export const CreateAccount = styled.div`
  color: white;
  font-family: monospace;
  span {
    cursor: pointer;
    margin-left: 5px;
    &:hover {
      color: #afafeb;
    }
  }
`;

export const ErrorMsg = styled.div`
  color: #df3d00;
  text-transform: capitalize;
`;
