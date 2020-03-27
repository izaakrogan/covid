import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import Box from './Box';

interface Props {
  multiCondition: boolean;
  setMultiCondition: (checked: boolean) => void;
}

export default function Checkbox({ multiCondition, setMultiCondition }: Props) {
  function handleCheck() {
    setMultiCondition(!multiCondition);
  }

  return (
    <Container onClick={handleCheck}>
      <Box selected={multiCondition} />
      <T.P2>I have more than one condition</T.P2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  user-select: none;
  cursor: pointer;
`;
