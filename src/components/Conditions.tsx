import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as TS from '../types';
import colors from '../style/colors';
import InputWrapper from './InputWrapper';
import ConditionsDropdown from './ConditionsDropdown';
import Selected from './ConditionsSelected';

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
  const [value, setValue] = useState('');
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

  function handleOpenDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleChange(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setValue(value);
  }

  function handleSelectCondition(condition: TS.Condition) {
    setSelectedCondition(condition);
    setDropdownOpen(false);
  }

  function handleUnselectCondition() {
    setSelectedCondition(undefined);
  }

  function handleCheck(e) {
    const { checked } = e.target;
    setMultiCondition(checked);
  }

  return (
    <InputWrapper title="Pre-existing conditions">
      <Container id="input-dropdown">
        <Input
          value={value}
          onChange={handleChange}
          onClick={handleOpenDropdown}
        />
        <ConditionsDropdown
          inputValue={value}
          selectedCondition={selectedCondition}
          selectCondition={handleSelectCondition}
          dropdownOpen={dropdownOpen}
        />
        <Selected
          selectedCondition={selectedCondition}
          unselectCondition={handleUnselectCondition}
        />
        <label>I have more than one condition</label>
        <input
          type="checkbox"
          value="Submit"
          checked={multiCondition}
          onChange={handleCheck}
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

const Input = styled.input`
  border: 1px solid ${colors.orange};
  outline-color: ${colors.orange};
  padding: 0 10px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1;
  height: 45px;
  max-width: 250px;
  min-width: 100%;
  border-radius: 0;
`;
