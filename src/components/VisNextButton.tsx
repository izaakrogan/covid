import React from 'react';
import styled from 'styled-components';

import colors from '../style/colors';
import arrow from '../images/down-arrow.svg';

interface Props {
  setPage: (a: number) => void;
}

export default function NextButton({ setPage }) {
  function handleClick() {
    setPage(3);
  }
  return (
    <Container onClick={handleClick}>
      <Img src={arrow} />
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

const Img = styled.img`
  transform: rotate(-90deg);
  color: ${colors.brown};
  height: 80px;
`;
