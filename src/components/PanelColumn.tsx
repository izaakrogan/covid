import React from 'react';
import styled from 'styled-components';

import T from './Typography';
import Radio from './Radio';

interface Props {
  title: string;
  description: string;
  options: any[];
  onChange: any;
  defaultVal: any;
}

export default function PanelColumn({
  title,
  description,
  options,
  onChange,
  defaultVal,
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <T.P2>{description}</T.P2>
      <RadioWrapper>
        {options.map(o => {
          return (
            <Radio
              value={o.val}
              setRelativeRisk={onChange}
              relativeRisk={defaultVal}
              text={o.label}
            />
          );
        })}
      </RadioWrapper>
    </Container>
  );
}

interface Container {
  open: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 40%;
`;
const RadioWrapper = styled.div`
  margin-top: 20px;
`;

const Title = styled(T.H4)`
  margin-bottom: 20px;
`;
