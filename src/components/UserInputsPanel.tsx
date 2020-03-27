import React, { useState } from 'react';
import styled from 'styled-components';

import riskData from '../data/risk.json';
import * as TS from '../types';
import colors from '../style/colors';
import device from '../style/device';
import Age from './AgeInput';
import Sex from './SexInput';
import Condition from './Condition';
import Header from './Header';

interface Props {
  setBaseRate: (baseRate: number) => void;
  setPage: any;
}

export default function UserInputsPanel({ setBaseRate, setPage }: Props) {
  const [age, setAge] = useState<number>();
  const [sex, setSex] = useState('');
  const [selectedCondition, setSelectedCondition] = useState<TS.Condition>({
    name: 'No conditions',
    id: 'no_conditions',
  });
  const [multiCondition, setMultiCondition] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(true);

  function openOnMobile() {
    setMobileOpen(true);
  }

  function closeOnMobile(e) {
    e.stopPropagation();
    setMobileOpen(false);
  }

  function calculateBaseRate() {
    const baseRate = filterByInputs();
    const basePercentage = baseRate * 100;
    setBaseRate(basePercentage);
  }

  function filterByInputs() {
    const filtered = riskData.find(condition => {
      const conditionMatch = matchCondition(condition);
      const ageMatch = matchAge(condition);
      const sexMatch = matchSex(condition);
      const multiMatch = matchMulti(condition);
      return conditionMatch && ageMatch && sexMatch && multiMatch;
    });

    return Math.random();
  }

  function matchCondition(condition) {
    const noCondition = !selectedCondition;
    if (noCondition) return condition.var === 'no_conditions';
    return condition.var === selectedCondition.id;
  }

  function matchAge(condition) {
    const isOlder = age > 70;
    const ageString = isOlder ? '>70' : '<=70';
    const matchAge = condition.age === ageString;
    return matchAge;
  }

  function matchSex(condition) {
    const sexString = sex === 'male' ? 'Men' : 'Women';
    const matchSex = condition.sex === sexString;
    return matchSex;
  }

  function matchMulti(condition) {
    const noCondition = !selectedCondition;
    if (noCondition) return condition.n_rf === 0;
    const multi = multiCondition ? '2+' : 1;
    return condition.n_rf === multi;
  }

  function handleCalculate(e) {
    e.stopPropagation();
    setMobileOpen(false);
    calculateBaseRate();
    setPage(2);
  }

  const haveValues = sex && age;
  return (
    <MobileDrawer open={mobileOpen} onClick={openOnMobile}>
      <Container>
        <Header closeOnMobile={closeOnMobile} />
        <Inputs>
          <Age age={age} setAge={setAge} />
          <Sex sex={sex} setSex={setSex} />
          <Condition
            selectedCondition={selectedCondition}
            setSelectedCondition={setSelectedCondition}
            multiCondition={multiCondition}
            setMultiCondition={setMultiCondition}
          />
        </Inputs>
        <ButtonStyled onClick={handleCalculate} disabled={!haveValues}>
          Calculate
        </ButtonStyled>
      </Container>
    </MobileDrawer>
  );
}

interface Container {
  open: boolean;
}

const MobileDrawer = styled.div`
  min-width: 400px;
  background: white;
  transition: max-width 0.3s;
  overflow: hidden;
  border-right: 1px solid ${colors.orange};
  height: 100%;
  @media ${device.tablet} {
    position: absolute;
    z-index: 10;
    width: 100%;
    ${({ open }: Container) => {
      if (open) {
        return `
          max-width: 400px;
        `;
      } else {
        return `
          max-width: 30px;
          cursor: pointer;
        `;
      }
    }}
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  width: 400px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Inputs = styled.div`
  border-bottom: 1px solid ${colors.orange};
`;

interface ButtonStyled {
  disabled: boolean;
}

const ButtonStyled = styled.button`
  background: ${colors.orange};
  color: white;
  border-radius: 2px;
  font-family: 'Lexend';
  width: fit-content;
  font-size: 18px;
  padding: 10px;
  border: none;
  margin: 20px;
  align-self: flex-end;
  cursor: pointer;
  outline-color: ${colors.orange};
  opacity: ${({ disabled }: ButtonStyled) => (disabled ? 0.5 : 1)};
`;
