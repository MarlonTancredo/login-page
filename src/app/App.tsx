import * as S from "./styles";

import LoginForm from "../components/loginForm/LoginForm";

const App: React.FunctionComponent = () => {
  return (
    <S.AppWrapper>
      <S.LogginSection>
        <LoginForm buttonName="Login" />
      </S.LogginSection>
    </S.AppWrapper>
  );
};

export default App;
