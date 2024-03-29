import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

import * as S from "./styles";

function Main() {
  const navigation = useNavigation();

  return (
    <S.Main element="main" isLoading={navigation.state !== "idle"}>
      <Outlet />
    </S.Main>
  );
}

export { Main };
