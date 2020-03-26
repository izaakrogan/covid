import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import device from '../style/device';
import cross from '../images/cross.svg';

interface Props {
  closeOnMobile: (e) => void;
}

export default function Header({ closeOnMobile }: Props) {
  return (
    <Container>
      <Title>
        How <br />
        high is
        <br /> my risk?
      </Title>
      <Cross src={cross} onClick={closeOnMobile} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled(T.H1)`
  margin: 20px;
  margin-right: 0;
`;

const Cross = styled.img`
  display: none;
  cursor: pointer;
  margin: 20px;
  @media ${device.tablet} {
    display: block;
  }
`;
