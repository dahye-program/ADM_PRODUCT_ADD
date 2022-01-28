import styled from 'styled-components';
import { PALLETS } from 'style/theme';

export const Input = ({ width, placeholder, desc }) => {
  return (
    <Container>
      <Inputspace type="text" width={width} placeholder={placeholder} />
      <Desc display={desc}>{desc}</Desc>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: no-wrap;
`;

const Inputspace = styled.input`
  width: ${(props) => props.width || '100%'};
  border: 1px solid ${PALLETS.LIGHTGRAY};
  border-radius: 8px;
  padding: 0 15px;
  height: 45px;
  &::placeholder {
    color: ${PALLETS.GRAY};
    font-size: 15px;
  }
`;

const Desc = styled.span`
  display: ${(props) => props.display || 'none'};
  margin-left: 10px;
`;
