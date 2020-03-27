import React, { useState } from 'react';
import styled from 'styled-components';

import BaseMortality from './VisualiseBaseMortality';
import CovidMorality from './VisualiseCovidMorality';

export default function Visualise({ page, setPage, baseRate }) {
  const [relativeRisk, setRelativeRisk] = useState(2);
  const mortalityRiskWithCovid = baseRate * relativeRisk;

  return (
    <Container>
      <BaseMortality rate={baseRate} />
      <CovidMorality
        rate={mortalityRiskWithCovid}
        relativeRisk={relativeRisk}
        setRelativeRisk={setRelativeRisk}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
