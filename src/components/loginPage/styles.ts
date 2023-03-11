import styled from "styled-components";

const primary = {
  white: "#f8f9fa",
  dark: "#212529",
  grey: "#343a40",
};

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginPageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
`;

export const LoginPageInput = styled.input`
  text-align: center;
  width: 25rem;
  height: 3rem;
  margin-bottom: 0.5rem;
  border: none;
  outline: none;
  border-radius: 1.5rem;
`;

export const LoginPageButton = styled.button`
  background-color: ${primary.dark};
  color: ${primary.white};
  width: 16rem;
  height: 3rem;
  border: none;
  border-radius: 1.5rem;
  transition: 0.3s;
  :hover {
    background-color: ${primary.grey};
    cursor: pointer;
  }
`;
