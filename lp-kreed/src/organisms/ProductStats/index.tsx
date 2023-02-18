import CardActivity from "../../molecules/CardActivity";

import HeroHeaderImage from "../../assets/kreed-header-image.png";

import * as S from "./styles";
import CardChart from "../../molecules/CardChart";

const ProductStats = () => {
  return (
    <S.Container>
      <CardActivity />
      <CardChart />
      <img src={HeroHeaderImage} alt="A woman doing a research." />
    </S.Container>
  );
};

export default ProductStats;
