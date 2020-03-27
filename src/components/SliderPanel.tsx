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
        title="Impact of Corona virus"
        description="The impact of Corona virus is a combination of the virus itself as well as the ability of the health system to cope."
        options={[
          { label: 'Best case scenario', val: 1.2 },
          { label: 'Middle case scenario', val: 1.5 },
          { label: 'Worst case scenario', val: 2 },
        ]}
        onChange={setRelativeRisk}
        defaultVal={relativeRisk}
      />
      <PanelColumn
        title="% of population infected with Corona virus"
        description="The percentage of people with the infection in the population affects how likely you are to be infected with Corona virus."
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
  display: flex;
  justify-content: space-between;
  height: 250px;
  overflow: hidden;
  padding: 0 20px;
  border-top: 1px solid ${colors.orange};
  background: white;
  @media ${device.tablet} {
    transition: height 0s, opacity 1s;
    width: 100vw;
    position: fixed;
    left: 0;
    z-index: 20;
    opacity: 0;
  }
`;
