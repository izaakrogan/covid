import React from 'react';
import styled from 'styled-components';

import Condition from './ConditionsDropdownOption';
import * as TS from '../types';
import colors from '../style/colors';

interface Props {
  inputValue: string;
  conditions: TS.Condition[];
  selectCondition: (a: TS.Condition) => void;
  dropdownOpen: boolean;
}

export default function Drawer({
  inputValue,
  conditions,
  selectCondition,
  dropdownOpen,
}: Props) {
  const filteredConditions = rawConditions.filter(condition => {
    const lowerCaseCondition = condition.name.toLowerCase();
    const lowerCaseInput = inputValue.toLowerCase();
    const matchesInput = lowerCaseCondition.indexOf(lowerCaseInput) > -1;
    const selectedConditionsName = conditions.map(o => o.name);
    const notAlreadySelected =
      selectedConditionsName.indexOf(condition.name) === -1;
    if (matchesInput && notAlreadySelected) return true;
    return false;
  });

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

const rawConditions = [
  { name: 'severe COPD', mortalityRate: 3 },
  { name: 'asthma', mortalityRate: 3 },
  { name: 'Coronary Heart DIsease (CHD)', mortalityRate: 3 },
  { name: 'AMI', mortalityRate: 3 },
  { name: 'HF', mortalityRate: 3 },
  { name: 'AAA', mortalityRate: 3 },
  { name: 'AF', mortalityRate: 3 },
  { name: 'TIA', mortalityRate: 3 },
  { name: 'stable angina', mortalityRate: 3 },
  { name: 'unstable angina', mortalityRate: 3 },
  { name: 'Stroke NOS', mortalityRate: 3 },
  { name: 'Stroke ischaemic', mortalityRate: 3 },
  { name: 'Subarachnoid hemorrhage', mortalityRate: 3 },
  { name: 'Stroke intracerebral', mortalityRate: 3 },
  { name: 'PAD', mortalityRate: 3 },
  { name: 'SCD', mortalityRate: 3 },
  { name: 'hypertension', mortalityRate: 3 },
];
