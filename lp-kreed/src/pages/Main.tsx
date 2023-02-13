import ButtonContact from "../atoms/ButtonContact";
import Fronted from "../templates/Fronted";
import * as S from "./styles";

function Main() {
  return (
    <Fronted>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immesive user
            experience.
          </h6>

          <ButtonContact />
        </div>
        <div>Coluna 2</div>
      </S.Container>
    </Fronted>
  );
}

export default Main;
