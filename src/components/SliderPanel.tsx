import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import colors from '../style/colors';
import device from '../style/device';

import PanelColumn from './PanelColumn';

interface Props {
  setRelativeRisk: (a: number) => void;
  relativeRisk: number;
}

export default function SliderPanel({ setRelativeRisk, relativeRisk }: Props) {
  return (
    <Container>
      <PanelColumn
        title="Impact of Covid 19"
        description="The impact of COVID-19 is a combination of the virus itself as well as the ability of the health system to cope."
        options={[
          { label: 'mild', val: 1.2 },
          { label: 'moderate', val: 1.5 },
          { label: 'severe', val: 2 },
        ]}
        onChange={setRelativeRisk}
        defaultVal={relativeRisk}
      />
      <PanelColumn
        title="% of population infected with COVID-19"
        description="The percentage of people with the infection in the population affects how likely you are to be infected with COVID-19."
        options={[
          { label: 'Low (1%)', val: 1 },
          { label: 'Medium (10%)', val: 10 },
          { label: 'High (80%)', val: 80 },
        ]}
        onChange={() => console.log('called')}
        defaultVal={80}
      />
    </Container>
  );
}

interface Container {
  open: boolean;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 250px;
  border-top: 1px solid ${colors.orange};
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  background: ${colors.backgroundGrey};
  overflow: hidden;
  background: white;
  padding: 0 20px;
  @media ${device.tablet} {
    transition: height 0s, opacity 1s;
    width: 100vw;
    position: fixed;
    left: 0;
    z-index: 20;
    opacity: 0;
  }
`;
