import Fronted from "../templates/Fronted";
import ProductInformation from "../organisms/ProductInformation";

import * as S from "./styles";
import ProductStats from "../organisms/ProductStats";

function Main() {
  return (
    <Fronted>
      <S.Container>
        <ProductInformation />
        <ProductStats />
      </S.Container>
    </Fronted>
  );
}

export default Main;
