import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import ForceDirected from '../src/components/VisForceViz';
import SliderPanel from '../src/components/BottomPanel';

export default function PageOne({ page, baseRate, mortalityRiskWithCovid }) {
  console.log('page:', page);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  function getVisPosition(position: number) {
    const quatre = width / 4;
    if (position === 0) {
      return quatre;
    } else {
      return quatre * 3;
    }
  }

  useEffect(() => {
    const width = containerRef?.current?.offsetWidth;
    setWidth(width);
  }, []);

  function renderVisualisation() {
    if (page === 1) {
      return (
        <ForceDirected
          id="force-directed"
          deathRate={baseRate}
          position={0}
          x={getVisPosition(0)}
        />
      );
    }

    return (
      <>
        <ForceDirected
          id="force-directed"
          deathRate={baseRate}
          position={0}
          x={getVisPosition(0)}
        />
        <ForceDirected
          id="force-directed"
          deathRate={mortalityRiskWithCovid}
          position={1}
          x={getVisPosition(1)}
        />
      </>
    );
  }

  return (
    <>
      <VisualisationContainer ref={containerRef}>
        {renderVisualisation()}
      </VisualisationContainer>
    </>
  );
}

const VisualisationContainer = styled.div`
  width: 100%;
  height: 400px;
`;
