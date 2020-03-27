import React from 'react';
import styled from 'styled-components';

import arrow from '../images/down-arrow.svg';
import * as TS from '../types';
import T from './Typography';
import colors from '../style/colors';

interface Props {
  selectedCondition: TS.Condition;
  onClick: () => void;
  dropdownOpen: boolean;
}

export default function Selected({
  selectedCondition,
  onClick,
  dropdownOpen,
}: Props) {
  return (
    <Container onClick={onClick}>
      <T.P2>{selectedCondition.name}</T.P2>
      <Arrow src={arrow} open={dropdownOpen} />
    </Container>
  );
}

const Container = styled.div`
  height: 45px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border: 1px solid ${colors.orange};
  z-index: 5;
  background-color: white;
  user-select: none;
`;

interface Arrow {
  open: boolean;
}

const Arrow = styled.img`
  width: 20px;
  transition: transform 0.3s;
  ${({ open }: Arrow) =>
    open ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'}
`;
