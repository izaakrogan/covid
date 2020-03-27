import React from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import InputWrapper from './InputWrapper';
import Dropdown from './ConditionDropdown';
import Checkbox from './ConditionCheckbox';

interface Props {
  selectedCondition: TS.Condition;
  setSelectedCondition: (a: TS.Condition) => void;
  multiCondition: boolean;
  setMultiCondition: (checked: boolean) => void;
}

export default function ConditionsInput({
  selectedCondition,
  setSelectedCondition,
  multiCondition,
  setMultiCondition,
}: Props) {
  return (
    <InputWrapper title="Pre-existing conditions">
      <Container id="input-dropdown">
        <Dropdown
          selectedCondition={selectedCondition}
          setSelectedCondition={setSelectedCondition}
        />
        <Checkbox
          multiCondition={multiCondition}
          setMultiCondition={setMultiCondition}
        />
      </Container>
    </InputWrapper>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 180px;
`;
