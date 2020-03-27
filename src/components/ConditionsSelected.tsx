import React from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import Condition from './ConditionsSelectedOption';

interface Props {
  selectedCondition: TS.Condition;
  unselectCondition: () => void;
}

export default function Selected({
  selectedCondition,
  unselectCondition,
}: Props) {
  if (!selectedCondition) return null;

  return (
    <Container>
      <Condition
        selectedCondition={selectedCondition}
        unselectCondition={unselectCondition}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;
