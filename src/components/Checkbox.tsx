import React from 'react';
import styled from 'styled-components';

import colors from '../style/colors';
import tick from '../images/tick.svg';

interface Props {
  selected: boolean;
}

export default function Radio({ selected }: Props) {
  const tickIcon = selected ? <img src={tick} /> : null;
  return <Container selected={selected}>{tickIcon}</Container>;
}

interface Container {
  selected: boolean;
}

const Container = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid ${colors.orange};
  background-color: ${({ selected }: Container) =>
    selected ? colors.orange : 'white'};
`;
