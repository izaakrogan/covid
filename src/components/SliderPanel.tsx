import React from 'react';
import styled from 'styled-components';

import SliderColumn from './SliderColumn';
import T from './Typography';
import colors from '../style/colors';
import device from '../style/device';
import arrow from '../images/down-arrow.svg';

interface Props {
  sliderPanelOpen: boolean;
  setSliderPanelOpen: any;
  setNHSAffectedRate: any;
  setCovidMortalityRate: any;
}

export default function SliderPanel({
  sliderPanelOpen,
  setSliderPanelOpen,
  setNHSAffectedRate,
  setCovidMortalityRate,
}: Props) {
  return (
    <Container open={sliderPanelOpen}>
      <Title>
        Change The <br />
        Assumptions
      </Title>
      <SliderColumn
        id="slider-one"
        title="Estimated affect on the NHS of the current emergency"
        subtitle="The lowest"
        handleChange={setNHSAffectedRate}
      />
      <SliderColumn
        id="slider-two"
        title="Estimated mortality rate of people with my condition"
        subtitle="blah"
        handleChange={setCovidMortalityRate}
      />

      <Arrow
        src={arrow}
        sliderPanelOpen={sliderPanelOpen}
        onClick={() => setSliderPanelOpen(!sliderPanelOpen)}
      />
    </Container>
  );
}

interface Container {
  open: boolean;
}

const Container = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.orange};
  display: flex;
  justify-content: space-between;
  transition: height 0.5s;
  position: absolute;
  bottom: 0;
  background: ${colors.backgroundGrey};
  overflow: hidden;
  background: white;
  ${({ open }: Container) => {
    if (open) {
      return `
        height: 200px;
      `;
    } else {
      return `
        height: 0;
      `;
    }
  }}

  @media ${device.tablet} {
    transition: height 0s, opacity 1s;
    width: 100vw;
    position: fixed;
    left: 0;
    z-index: 20;
    opacity: 0;
    ${({ open }: Container) => {
      if (open) {
        return `
          opacity: 1;
          height: 100%;
        `;
      } else {
        return `
          height: 0;
        `;
      }
    }}
  }
`;

const Column = styled.div`
  width: 30%;
  min-height: 100%;
  max-height: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SliderSvg = styled.svg`
  width: 200px;
  height: 100px;
`;

const Title = styled(T.H3)`
  margin-left: 30px;
  margin-top: 50px;
`;

interface Arrow {
  sliderPanelOpen: boolean;
}

const Arrow = styled.img`
  position: absolute;
  right: 10px;
  width: 15px;
  cursor: pointer;
  top: 10px;
  transform: ${({ sliderPanelOpen }: Arrow) =>
    sliderPanelOpen ? null : 'rotate(180deg)'};
`;
