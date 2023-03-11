import * as S from "./styles";

type ButtonMessage = {
  message?: string;
};

const LoginPage = ({ message }: ButtonMessage) => {
  const clickedButton = () => {
    console.log("Clicked");
  };

  return (
    <S.LoginPageWrapper>
      <S.LoginPageForm action="#">
        <S.LoginPageInput
          type="text"
          placeholder="Login"
          autoComplete="username"
        />
        <S.LoginPageInput
          type="password"
          placeholder="Password"
          autoComplete="password"
        />
        <S.LoginPageButton onClick={clickedButton}>{message}</S.LoginPageButton>
      </S.LoginPageForm>
    </S.LoginPageWrapper>
  );
};

export default LoginPage;
