import React, { useEffect } from 'react';
import styled from 'styled-components';
import arrow from '../images/down-arrow.svg';
import BarChart from './BarChart';
import T from './Typography';

export default function PageThree({ page, setPage }) {
  function movePageLeft() {
    setPage(page - 1);
  }

  return (
    <VisContainer>
      <Title>Mortality risk in context</Title>
      <SubTitle>compare one year mortality of different condition(s)</SubTitle>
      <LeftArrowStyled src={arrow} onClick={movePageLeft} />
      <BarChart id="bar-chart" />
      <StyledSvg id="bar-chart" />
    </VisContainer>
  );
}

const VisContainer = styled.div`
  width: 100%;
`;
const StyledSvg = styled.svg`
  width: 800px;
  height: 600px;
`;

const LeftArrowStyled = styled.img`
  transform: rotate(90deg);
  width: 60px;
  position: absolute;
  left: 0;
  top: 40%;
  cursor: pointer;
`;

const Title = styled(T.H3)`
  margin-left: 120px;
  margin-top: 100px;
`;

const SubTitle = styled(T.P2)`
  margin-left: 120px;
`;
