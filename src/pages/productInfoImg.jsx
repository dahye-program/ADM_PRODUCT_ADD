import Contentwrap from "components/layout/Contentwrap";
import styled from "styled-components";
import { PALLETS } from "style/theme";
import ProductInfoImage from "components/productInfoImage/ProductInfoImage";

const ProductInfoImg = () => {
  return (
    <Contentwrap title="상품 소개 이미지">
      <Contentwrap.Main>
        <Wrap>
          <ProductInfoImage />
        </Wrap>
      </Contentwrap.Main>
    </Contentwrap>
  );
};

export default ProductInfoImg;

const Wrap = styled.section`
  box-sizing: border-box;
  background: ${PALLETS.LIGHTGRAY};
`;
