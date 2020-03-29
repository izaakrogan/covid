import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import T from './Typography';

interface Props {
  description: string;
  percentage: number;
}

export default function ForceDescription({ description, percentage }) {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => setOpacity(1), 100);
  }, []);
  const formattedPercentage = percentage.toFixed(1);

  return (
    <Container>
      <Percentage style={{ opacity }}>{formattedPercentage}%</Percentage>
      <ForceTitleStyled style={{ opacity }}>{description}</ForceTitleStyled>
    </Container>
  );
}

const ForceTitleStyled = styled(T.P2)`
  min-width: 100%;
  text-align: left;
  font-size: 12px;
  margin: 0;
  transition: opacity 0.5s;
`;

const Percentage = styled(T.H1)`
  width: 100%;
  text-align: right;
  transition: opacity 0.5s;
  margin-bottom: 15px;
`;

const Container = styled.div`
  width: 220px;
`;
