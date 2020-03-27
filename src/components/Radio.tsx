import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import Box from './Checkbox';

interface Props {
  value: number;
  setRelativeRisk: (a: number) => void;
  relativeRisk: number;
  text: string;
}

export default function Radio({
  value,
  setRelativeRisk,
  relativeRisk,
  text,
}: Props) {
  const selected = value === relativeRisk;

  function handleClick() {
    setRelativeRisk(value);
  }

  return (
    <Container onClick={handleClick}>
      <Box selected={selected}></Box>
      <T.P2>{text}</T.P2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;
