import Header from "../../organisms/Header";
import * as S from "./styles";

type FrontendProps = {
  children: React.ReactNode
}

const Fronted = ({children}: FrontendProps) => {
  return(
    <S.Container>
      <Header />
    </S.Container>
  )
}

export default Fronted