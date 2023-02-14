import ButtonContact from "../atoms/ButtonContact";
import Fronted from "../templates/Fronted";
import * as S from "./styles";

import HeroHeaderImage from "../assets/kreed-header-image.png";
import CardActivity from "../molecules/CardActivity";

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
        <S.ColumnImage>
          <CardActivity />
          <img src={HeroHeaderImage} alt="A woman doing a research." />
        </S.ColumnImage>
      </S.Container>
    </Fronted>
  );
}

export default Main;
