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
  return (
    <Container>
      <T.P>Your risk of dying in the next year with no covid</T.P>
      <Wrapper>
        <Dots rate={rate} type={'covid'} />
        <ChangeRR
          setRelativeRisk={setRelativeRisk}
          relativeRisk={relativeRisk}
        />
      </Wrapper>
      <T.P>no covid, no emergency: </T.P>
      <T.P>
        Estimated one year mortality risk for a 35 year old woman with x, y and
        z is:
      </T.P>
      <T.P>0.1%</T.P>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  border: 1px solid;
`;

const Wrapper = styled.div`
  display: flex;
`;
