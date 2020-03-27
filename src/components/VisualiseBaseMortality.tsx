import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import Dots from './VisualiseDots';

interface Props {
  baseRate: number;
}

export default function BaseMortality({ rate }) {
  return (
    <Container>
      <T.P>Your risk of dying in the next year with no covid</T.P>
      <Dots rate={rate} type={'base'} />
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
