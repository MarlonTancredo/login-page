import { useState } from "react";
import * as S from "./styles";

type ButtonProps = {
  name: string;
  forbidden?: boolean;
};

const LoginPage = ({ name, forbidden }: ButtonProps) => {
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
    if (userName === "") {
      alert("You didn't enter your user name");
      return;
    }
    if (password === "") {
      alert("You didn't enter your password");
      return;
    }
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
          required
        />
        <S.LoginPageInput
          value={password}
          type="password"
          placeholder="Password"
          autoComplete="password"
          onChange={handlePassword}
          required
        />
        <S.LoginPageButton
          forbidden={forbidden}
          type="submit"
          onClick={clickedButton}
        >
          {name}
        </S.LoginPageButton>
      </S.LoginPageForm>
    </S.LoginPageWrapper>
  );
};

export default LoginPage;
