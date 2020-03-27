import React, { useState } from 'react';
import styled from 'styled-components';

import SliderPanel from './SliderPanel';
import VizColumn from './VizColumn';

export default function Visualise({ page, setPage, baseRate }) {
  const [relativeRisk, setRelativeRisk] = useState(2);
  const mortalityRiskWithCovid = baseRate * relativeRisk;

  return (
    <Container>
      <VizColumn
        rate={baseRate}
        type="base"
        title="Your risk of dying in the next year with no covid"
        description="Estimated one year mortality risk for a 35 year old woman with x, yand z is:"
      />
      <VizColumn
        rate={mortalityRiskWithCovid}
        type="covid"
        title="Your risk of dying in the next year with no covid"
        description="Estimated one year mortality risk for a 35 year old woman with x, y and z is:"
      />
      <SliderPanel
        setRelativeRisk={setRelativeRisk}
        relativeRisk={relativeRisk}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
