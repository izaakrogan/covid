import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import Radio from './Radio';

interface Props {
  setRelativeRisk: (a: number) => void;
  relativeRisk: number;
}

export default function ChangeRR({ setRelativeRisk, relativeRisk }) {
  return (
    <Container>
      <H4Styled>Impact of COVID-19</H4Styled>
      <Radio
        value={1.2}
        setRelativeRisk={setRelativeRisk}
        relativeRisk={relativeRisk}
        text={'Mild'}
      />
      <Radio
        value={1.5}
        setRelativeRisk={setRelativeRisk}
        relativeRisk={relativeRisk}
        text={'Moderate'}
      />
      <Radio
        value={2}
        setRelativeRisk={setRelativeRisk}
        relativeRisk={relativeRisk}
        text={'Severe'}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  border: 1px solid;
`;

const H4Styled = styled(T.H4)`
  margin-bottom: 20px;
`;
