import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import * as TS from '../types';
import colors from '../style/colors';

interface Props {
  condition: TS.Condition;
  selectCondition: (a: TS.Condition) => void;
}

export default function ConditionsDropdownConditions({
  condition,
  selectCondition,
}: Props) {
  function handleSelectCondition() {
    selectCondition(condition);
  }

  return (
    <Container onClick={handleSelectCondition}>
      <T.P2>{condition.name}</T.P2>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: ${colors.orange};
    p {
      color: white;
    }
  }
`;
