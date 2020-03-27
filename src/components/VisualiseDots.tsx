import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import Dots from './ForceDirected';

interface Props {
  rate: number;
  type: string;
}

export default function VisualiseDots({ rate, type }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  useEffect(() => {
    const { current } = containerRef;
    if (!current) return;
    const width = current.clientWidth;
    const height = current.clientHeight;
    setCenterX(width / 2);
    setCenterY(height / 2);
  }, []);

  return (
    <Container ref={containerRef}>
      <Dots
        id={`force-directed-${type}`}
        deathRate={rate}
        position={0}
        x={centerX}
        y={centerY}
      />
      <Svg id={`force-directed-${type}`} />
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 300px;
  width: 100%;
  overflow: hidden;
`;

const Svg = styled.svg`
  height: 100%;
  width: 100%;
`;
