import styled from "styled-components";

type PrimaryColors = {
  white: string;
  dark: string;
  grey: string;
  red: string;
  clearRed: string;
};

const primaryColors: PrimaryColors = {
  white: "#f8f9fa",
  dark: "#212529",
  grey: "#343a40",
  red: "#d90429",
  clearRed: "#ef233c",
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

export const LoginPageButton = styled.button<{ forbidden?: boolean }>`
  background-color: ${(props) =>
    props.forbidden ? primaryColors.red : primaryColors.dark};
  color: ${primaryColors.white};
  width: 16rem;
  height: 3rem;
  border: none;
  border-radius: 1.5rem;
  transition: 0.3s;
  :hover {
    background-color: ${(props) =>
      props.forbidden ? primaryColors.clearRed : primaryColors.grey};
    cursor: pointer;
  }
`;
