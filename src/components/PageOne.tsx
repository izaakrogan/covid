import React from 'react';
import styled from 'styled-components';

// import ForceDirected from './ForceDirected';

export default function PageOne({ page, setPage, baseRate }) {
  function getXCenterGrav(position) {
    const windowWidth = window.innerWidth;
    const widthOfRightSide = (windowWidth / 100) * 70;
    const widthOfSpaceForForce = widthOfRightSide / 3;

    const midPointOfWidth = widthOfSpaceForForce / 2;
    return widthOfSpaceForForce * position + midPointOfWidth;
  }

  const svgWidth = (window.innerWidth / 100) * 70;

  return (
    <VisContainer>
      {/* <ForceDirected
        id="force-directed"
        deathRate={baseRate}
        position={0}
        x={getXCenterGrav(0)}
      /> */}
      <StyledSvg id="force-directed" style={{ width: svgWidth }} />
    </VisContainer>
  );
}

const VisContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledSvg = styled.svg`
  height: 600px;
  position: absolute;
  top: 0;
  z-index: -1;
`;
