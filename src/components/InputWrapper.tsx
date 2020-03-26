import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import colors from '../style/colors';

interface Props {
  children: any;
  title: string;
}

export default function InputWrapper({ children, title }: Props) {
  return (
    <Container>
      <UserTitle>{title}</UserTitle>
      {children}
    </Container>
  );
}

const Container = styled.div`
  flex: 2;
  border-top: 1px solid ${colors.orange};
  transition: height 0.5s;
  padding: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

interface ArrowStyled {
  dropDownOpen: boolean;
}

const ArrowStyled = styled.img`
  width: 20px;
  transition: transform 1s;
  ${({ dropDownOpen }: ArrowStyled) =>
    dropDownOpen ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'}
`;

export const UserTitle = styled(T.H4)`
  margin-bottom: 20px;
`;
