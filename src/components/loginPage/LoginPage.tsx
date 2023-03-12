import { useState } from "react";
import * as S from "./styles";

type ButtonProps = {
  name: string;
  red?: boolean;
};

const LoginPage = ({ name, red }: ButtonProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (event: { target: { value: string } }) => {
    const myEvent = event.target.value;
    setUserName(myEvent);
  };

  const handlePassword = (event: { target: { value: string } }) => {
    const myEvent = event.target.value;
    setPassword(myEvent);
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
        <S.LoginPageButton red={red} type="submit" onClick={clickedButton}>
          {name}
        </S.LoginPageButton>
      </S.LoginPageForm>
    </S.LoginPageWrapper>
  );
};

export default LoginPage;
