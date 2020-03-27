import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import colors from '../style/colors';
import rawConditions from '../data/conditions';
import Selected from './ConditionDropdownSelected';
import Condition from './ConditionDropdownOption';

interface Props {
  selectedCondition: TS.Condition;
  setSelectedCondition: (a: TS.Condition) => void;
}

export default function Drawer({
  selectedCondition,
  setSelectedCondition,
}: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', handleClick, true);
    return () => {
      document.body.removeEventListener('click', handleClick, true);
    };
  });

  function handleClick(e) {
    setTimeout(() => {
      if (dropdownOpen) {
        setDropdownOpen(false);
      }
    });
  }

  function selectCondition(condition: TS.Condition) {
    setSelectedCondition(condition);
    setDropdownOpen(false);
  }

  const filteredConditions = rawConditions.filter(condition => {
    return condition !== selectedCondition;
  });

  function handleOpenDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <>
      <Selected
        selectedCondition={selectedCondition}
        onClick={handleOpenDropdown}
        dropdownOpen={dropdownOpen}
      />
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
    </>
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
  top: 43px;
  max-width: 250px;
  min-width: 100%;
  transition: max-height 0.3s;
  ${({ open }: Container) => {
    if (open) {
      return `
        max-height: 160px;
        // visibility: visible;
      `;
    }
  }};
`;
