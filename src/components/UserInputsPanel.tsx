import React, { useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import * as TS from '../types';
import T from './Typography';
import colors from '../style/colors';
import device from '../style/device';
import Age from './AgeInput';
import Sex from './SexInput';
import Conditions from './Conditions';
import Header from './Header';

interface Props {
  setBaseRate: (baseRate: number) => void;
  setPage: any;
}

export default function UserInputsPanel({ setBaseRate, setPage }: Props) {
  const [age, setAge] = useState<number>();
  const [sex, setSex] = useState('');
  const [mobileOpen, setMobileOpen] = useState(true);
  const [conditions, setConditions] = useState<TS.Condition[]>([]);

  function openOnMobile() {
    setMobileOpen(true);
  }

  function closeOnMobile(e) {
    e.stopPropagation();
    setMobileOpen(false);
  }

  function calculateBaseRate() {
    const ageVariant = ageToMultiplier(age);
    const sexVariant = sexToMultiplier(sex);
    const conditionsVariant = conditionsToMultiplier(conditions);
    const baseRate = multiplyRate(ageVariant, sexVariant, conditionsVariant);
    setBaseRate(baseRate);
  }

  function ageToMultiplier(age: number) {
    return age > 70 ? 2 : 1;
  }

  function sexToMultiplier(sex: string) {
    return sex === 'Female' ? 1 : 1.2;
  }

  function conditionsToMultiplier(conditions: TS.Condition[]) {
    return conditions.reduce((acc, condition) => {
      return (acc += condition.mortalityRate);
    }, 1);
  }

  function multiplyRate(age: number, sex: number, conditions: number) {
    return age * sex * conditions;
  }

  function handleCalculate(e) {
    e.stopPropagation();
    setMobileOpen(false);
    d3.select('#force-directed')
      .selectAll(`circle`)
      .remove();
    calculateBaseRate();
    setPage(1);
  }

  const haveValues = sex && age;
  return (
    <MobileDrawer open={mobileOpen} onClick={openOnMobile}>
      <Container>
        <Header closeOnMobile={closeOnMobile} />
        <Inputs>
          <Age age={age} setAge={setAge} />
          <Sex sex={sex} setSex={setSex} />
          <Conditions conditions={conditions} setConditions={setConditions} />
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
  width: 400px;
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
