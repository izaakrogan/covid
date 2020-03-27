import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import Dots from './VisualiseDots';
import ChangeRR from './VisualiseCovidMortalityChangeRR';

interface Props {
  setRelativeRisk: (a: number) => void;
  relativeRisk: number;
  baseRate: number;
}

export default function CovidMortality({
  rate,
  relativeRisk,
  setRelativeRisk,
}) {
  const formattedPercentage = rate.toFixed(1);

  return (
    <Container>
      <H4Styled>Your risk of dying in the next year with COVID-19</H4Styled>
      <Wrapper>
        <Dots rate={rate} type={'covid'} />
        <ChangeRR
          setRelativeRisk={setRelativeRisk}
          relativeRisk={relativeRisk}
        />
      </Wrapper>
      <TextWrapper>
        <H1Styled>{formattedPercentage}%</H1Styled>
        <PStyled>
          Estimated one year mortality risk for a 35 year old woman with x, y
          and z is:
        </PStyled>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H4Styled = styled(T.H4)`
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid;
`;

const H1Styled = styled(T.H1)`
  width: 100%;
  text-align: right;
  transition: opacity 0.5s;
  margin-bottom: 15px;
`;

const PStyled = styled(T.P2)`
  min-width: 100%;
  text-align: left;
  font-size: 12px;
  margin: 0;
  transition: opacity 0.5s;
`;

const TextWrapper = styled.div`
  width: 220px;
  margin-top: 20px;
`;
