import React, { useState } from 'react';
import styled from 'styled-components';

import arrow from '../images/down-arrow.svg';
import gear from '../images/gear.svg';
import ForceDirected from './ForceDirected';
import TextInVisualisation from './TextInVisualisation';
import SliderPanel from './SliderPanel';

export default function PageOne({
  page,
  setPage,
  baseRate,
  relativeRisk,
  setRelativeRisk,
}) {
  const [sliderPanelOpen, setSliderPanelOpen] = useState(false);
  const [comingFromLeft, setComingFromLeft] = useState(false);
  const [covidMortalityRate, setCovidMortalityRate] = useState(0.2);

  function toggleControls() {
    setSliderPanelOpen(!sliderPanelOpen);
  }

  function movePageRight() {
    setComingFromLeft(true);
    setPage(page + 1);
  }

  const mortalityRiskNoCovid = baseRate * relativeRisk;
  const mortalityRiskWithCovid = mortalityRiskNoCovid * covidMortalityRate;
  function getXCenterGrav(position) {
    const windowWidth = window.innerWidth;
    const widthOfRightSide = (windowWidth / 100) * 70;
    const widthOfSpaceForForce = widthOfRightSide / 3;

    const midPointOfWidth = widthOfSpaceForForce / 2;
    return widthOfSpaceForForce * position + midPointOfWidth;
  }

  function getVisualisation() {
    switch (page) {
      case 1:
        return (
          <ForceDirected
            id="force-directed"
            deathRate={baseRate}
            position={0}
            x={getXCenterGrav(0)}
          />
        );
      case 2:
        return (
          <>
            <ForceDirected
              id="force-directed"
              deathRate={baseRate}
              position={0}
              x={getXCenterGrav(0)}
            />
            <ForceDirected
              id="force-directed"
              deathRate={mortalityRiskNoCovid}
              position={1}
              x={getXCenterGrav(1)}
            />
          </>
        );
      case 3:
        return (
          <>
            <ForceDirected
              id="force-directed"
              deathRate={baseRate}
              position={0}
              x={getXCenterGrav(0)}
            />
            <ForceDirected
              id="force-directed"
              deathRate={mortalityRiskNoCovid}
              position={1}
              x={getXCenterGrav(1)}
            />

            <ForceDirected
              id="force-directed"
              deathRate={mortalityRiskWithCovid}
              position={2}
              x={getXCenterGrav(2)}
            />
          </>
        );

      default:
        return null;
    }
  }
  const svgWidth = (window.innerWidth / 100) * 70;

  return (
    <VisContainer>
      <Gear src={gear} onClick={toggleControls} />
      <TextInVisualisation
        page={page}
        base={baseRate}
        noCovid={mortalityRiskNoCovid}
        withCovid={mortalityRiskWithCovid}
      />
      {getVisualisation()}
      <RightArrowStyled src={arrow} onClick={movePageRight} />
      <StyledSvg id="force-directed" style={{ width: svgWidth }} />
      <SliderPanel
        sliderPanelOpen={sliderPanelOpen}
        setSliderPanelOpen={setSliderPanelOpen}
        setNHSAffectedRate={setRelativeRisk}
        setCovidMortalityRate={setCovidMortalityRate}
      />
    </VisContainer>
  );
}

const VisContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Gear = styled.img`
  padding: 20px;
  float: right;
`;

const StyledSvg = styled.svg`
  height: 600px;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const RightArrowStyled = styled.img`
  transform: rotate(270deg);
  width: 60px;
  position: absolute;
  right: 0;
  top: 40%;
  cursor: pointer;
`;
