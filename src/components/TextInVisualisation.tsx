import React from 'react';
import styled from 'styled-components';
import T from './Typography';
import ForceDescription from './ForceDescription';

interface Props {
  base: number;
  noCovid: number;
  withCovid: number;
}

export default function TextInVisualisation({
  base,
  noCovid,
  withCovid,
  page,
}) {
  function getText() {
    switch (page) {
      case 1:
        return (
          <>
            <ForceDescription
              description="My estimated one year mortality risk as a 35 year old woman with x, y and z, before the current emergency."
              percentage={base}
            />
            <DummyDiv />
            <DummyDiv />
          </>
        );
      case 2:
        return (
          <>
            <ForceDescription
              description="My estimated one year mortality risk as a 35 year old woman with x, y and z, before the current emergency."
              percentage={base}
            />
            <ForceDescription
              description="My estimated  one year mortality risk if my care is affected by pressures on the NHS under this current emergency (assuming I am still not invected)"
              percentage={noCovid}
            />
            <DummyDiv />
          </>
        );
      case 3:
        return (
          <>
            <ForceDescription
              description="My estimated one year mortality risk as a 35 year old woman with x, y and z, before the current emergency."
              percentage={base}
            />
            <ForceDescription
              description="My estimated  one year mortality risk if my care is affected by pressures on the NHS under this current emergency (assuming I am still not invected)"
              percentage={noCovid}
            />
            <ForceDescription
              description="My estimated  one year mortality risk if I become infected by corona virus in this current emergency"
              percentage={withCovid}
            />
          </>
        );

      default:
        return null;
    }
  }
  return <StatSummaries>{getText()}</StatSummaries>;
}

const StatSummaries = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 450px;
`;

const DummyDiv = styled.div`
  min-width: 200px;
`;
