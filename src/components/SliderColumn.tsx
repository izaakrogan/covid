import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import T from './Typography';

interface Props {
  title: string;
  subtitle: string;
  id: string;
  handleChange: any;
}

export default function SliderColumn({ title, subtitle, id, handleChange }: Props) {
  return (
    <Column>
      <Writing>
        <SliderTitle>{title}</SliderTitle>
        <T.P3>{subtitle}</T.P3>
      </Writing>
      <Slider id={id} setVal={handleChange} />
      <SliderSvg id={id} />;
    </Column>
  );
}

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
  width: 300px;
  height: 100px;
`;

const SliderTitle = styled(T.H4)`
  margin-right: 50px;
  margin-bottom: 15px;
`;

const Writing = styled.div`
  margin-left: 20px;
`;
