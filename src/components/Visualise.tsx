import React, { useState } from 'react';
import styled from 'styled-components';

import SliderPanel from './SliderPanel';
import VizColumn from './VisColumn';
import NextButton from './VisNextButton';

export default function Visualise({ page, setPage, baseRate }) {
  const [relativeRisk, setRelativeRisk] = useState(2);
  const mortalityRiskWithCovid = baseRate * relativeRisk;

  if (page === 1) return null;

  return (
    <Container>
      <Wrapper>
        <VizColumn
          rate={baseRate}
          type="base"
          title="Your risk of dying within the next year if Corona virus had never existed"
          description="Estimated one year mortality risk for a 35 year old woman with x, yand z is:"
        />
        {page === 3 && (
          <VizColumn
            rate={mortalityRiskWithCovid}
            type="covid"
            title="Your risk of dying in the next year if you contract Corona virus"
            description="Estimated one year mortality risk for a 35 year old woman with x, y and z is:"
          />
        )}
        {page === 2 && <NextButton setPage={setPage} />}
      </Wrapper>
      <SliderPanel
        setRelativeRisk={setRelativeRisk}
        relativeRisk={relativeRisk}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
