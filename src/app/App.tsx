import * as S from "./styles";

import LoginPage from "../components/loginPage/LoginPage";

const App = () => {
  return (
    <S.AppWrapper>
      <S.LogginSection>
        <LoginPage />
      </S.LogginSection>
    </S.AppWrapper>
  );
};

export default App;
