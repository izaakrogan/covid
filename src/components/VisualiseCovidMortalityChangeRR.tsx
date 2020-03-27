import React from 'react';
import styled from 'styled-components';

import Radio from './Radio';

interface Props {
  setRelativeRisk: (a: number) => void;
  relativeRisk: number;
}

export default function ChangeRR({ setRelativeRisk, relativeRisk }) {
  return (
    <Container>
      <Radio
        value={1.2}
        setRelativeRisk={setRelativeRisk}
        relativeRisk={relativeRisk}
      />
      <Radio
        value={1.5}
        setRelativeRisk={setRelativeRisk}
        relativeRisk={relativeRisk}
      />
      <Radio
        value={2}
        setRelativeRisk={setRelativeRisk}
        relativeRisk={relativeRisk}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  border: 1px solid;
`;
