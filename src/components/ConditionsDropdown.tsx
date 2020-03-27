import React from 'react';
import styled from 'styled-components';

import Condition from './ConditionsDropdownOption';
import * as TS from '../types';
import colors from '../style/colors';
import rawConditions from '../data/conditions';

interface Props {
  inputValue: string;
  selectedCondition: TS.Condition;
  selectCondition: (a: TS.Condition) => void;
  dropdownOpen: boolean;
}

export default function Drawer({
  inputValue,
  selectedCondition,
  selectCondition,
  dropdownOpen,
}: Props) {
  const filteredConditions = rawConditions.filter(condition => {
    const matchesSearchInput = checkSearchInput(condition, inputValue);
    return matchesSearchInput;
  });

  function checkSearchInput(condition, inputValue) {
    const lowerCaseCondition = condition.name.toLowerCase();
    const lowerCaseInput = inputValue.toLowerCase();
    const matchesSearchInput = lowerCaseCondition.indexOf(lowerCaseInput) > -1;
    return matchesSearchInput;
  }

  if (filteredConditions.length === 0) {
    return null;
  }

  return (
    <Container open={dropdownOpen}>
      {filteredConditions.map((condition, i) => {
        return (
          <Condition
            key={i}
            condition={condition}
            selectCondition={selectCondition}
          />
        );
      })}
    </Container>
  );
}

interface Container {
  open: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  max-height: 0;
  border: 1px solid ${colors.orange};

  overflow: scroll;
  z-index: 2;
  top: 44px;
  max-width: 250px;
  min-width: 100%;
  ${({ open }: Container) => {
    if (open) {
      return `
        max-height: 160px;
      `;
    }
  }};
`;
