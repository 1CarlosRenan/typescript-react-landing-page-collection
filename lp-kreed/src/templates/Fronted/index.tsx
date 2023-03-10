import Header from "../../organisms/Header";
import * as S from "./styles";

type FrontendProps = {
  children: React.ReactNode;
};

const Fronted = ({ children }: FrontendProps) => {
  return (
    <S.Container>
      <Header />

      <main>{children}</main>
    </S.Container>
  );
};

export default Fronted;
