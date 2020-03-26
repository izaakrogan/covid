import React, { useState } from 'react';
import styled from 'styled-components';

import device from '../style/device';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

export default function Right({ baseRate, page, setPage }) {
  const [relativeRisk, setRelativeRisk] = useState(2);

  function getVisualisation() {
    switch (true) {
      case page < 4:
        return (
          <PageOne
            baseRate={baseRate}
            relativeRisk={relativeRisk}
            page={page}
            setPage={setPage}
            setRelativeRisk={setRelativeRisk}
          />
        );
      case page === 4:
        return <PageTwo page={page} setPage={setPage} />;
      case page === 5:
        return <PageThree page={page} setPage={setPage} />;
      default:
        return null;
    }
  }
  return <Container>{getVisualisation()}</Container>;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    width: 100%;
  }
`;
