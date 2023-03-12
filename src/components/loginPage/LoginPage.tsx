import { useState } from "react";
import * as S from "./styles";

type ButtonMessage = {
  message?: string;
};

const LoginPage = ({ message }: ButtonMessage) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (event: { target: { value: string } }) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event: { target: { value: string } }) => {
    setPassword(event.target.value);
  };

  const clickedButton = () => {
    console.log(`UserName: ${userName} Password: ${password} `);
  };

  return (
    <S.LoginPageWrapper>
      <S.LoginPageForm action="#">
        <S.LoginPageInput
          value={userName}
          type="text"
          placeholder="Username"
          autoComplete="username"
          onChange={handleUserName}
        />
        <S.LoginPageInput
          value={password}
          type="password"
          placeholder="Password"
          autoComplete="password"
          onChange={handlePassword}
        />
        <S.LoginPageButton type="submit" onClick={clickedButton}>
          {message}
        </S.LoginPageButton>
      </S.LoginPageForm>
    </S.LoginPageWrapper>
  );
};

export default LoginPage;
