import React from 'react';
import styled from 'styled-components';

import T from './Typography';

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
    <Container>
      <Box onClick={handleClick} selected={selected}></Box>
      <T.P2>{text}</T.P2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

interface Box {
  selected: boolean;
}

const Box = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  background-color: ${({ selected }: Box) => (selected ? 'green' : 'white')};
`;
