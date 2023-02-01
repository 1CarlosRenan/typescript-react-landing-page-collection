import * as S from "./styles";

import Logo from "../../molecules/Logo";
import Button from "../../atoms/Button";
import Menu from "../Menu";

const Header = () => {
  return (
    <S.Box>
      <Logo />
      <Button />
      <Menu />
    </S.Box>
  );
};

export default Header;
