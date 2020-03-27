import React from 'react';
import styled from 'styled-components';

interface Props {
  value: number;
  setRelativeRisk: (a: number) => void;
  relativeRisk: number;
}

export default function Radio({ value, setRelativeRisk, relativeRisk }: Props) {
  const selected = value === relativeRisk;

  function handleClick() {
    setRelativeRisk(value);
  }

  return <Container onClick={handleClick} selected={selected}></Container>;
}

interface Container {
  selected: boolean;
}

const Container = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${({ selected }: Container) =>
    selected ? 'green' : 'white'};
`;
