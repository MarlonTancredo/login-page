import * as S from "./styles";

import LoginPage from "../components/loginPage/LoginPage";

const App: React.FunctionComponent = () => {
  return (
    <S.AppWrapper>
      <S.LogginSection>
        <LoginPage message="Login" />
      </S.LogginSection>
    </S.AppWrapper>
  );
};

export default App;
