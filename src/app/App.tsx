import * as S from "./styles";

import LoginPage from "../components/loginPage/LoginPage";

const App: React.FunctionComponent = () => {
  return (
    <S.AppWrapper>
      <S.LogginSection>
        <LoginPage name="Login" />
      </S.LogginSection>
    </S.AppWrapper>
  );
};

export default App;
