import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import Dots from './VisualiseDots';

interface Props {
  rate: number;
  type: string;
  title: string;
  description: string;
}

export default function VizColumn({ rate, type, title, description }: Props) {
  const formattedPercentage = rate.toFixed(1);

  return (
    <Container>
      <H4Styled>{title}:</H4Styled>
      <Dots rate={rate} type={type} />
      <TextWrapper>
        <H1Styled>{formattedPercentage}%</H1Styled>
        {/* <PStyled>{description}</PStyled> */}
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 250px;
`;

const H4Styled = styled(T.H4)`
  margin-bottom: 20px;
  width: 60%;
  height: 50px;
`;

const H1Styled = styled(T.H1)`
  width: 100%;
  text-align: right;
  transition: opacity 0.5s;
  margin-bottom: 15px;
`;

const PStyled = styled(T.P2)`
  font-size: 12px;
  margin: 0;
  transition: opacity 0.5s;
  text-align: right;
  max-width: 60%;
`;

const TextWrapper = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60%;
`;
