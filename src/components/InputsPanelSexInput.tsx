import React from 'react';
import styled from 'styled-components';

import InputWrapper from './InputsPanelInputWrapper';
import T from './Typography';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import colors from '../style/colors';

interface Props {
  sex: string;
  setSex: (sex: string) => void;
}

export default function SexInput({ sex, setSex }: Props) {
  const sexArr = ['Male', 'Female'];
  return (
    <InputWrapper title="Sex: ">
      <RadioGroup onChange={(e: any) => setSex(e)} horizontal>
        {sexArr.map(s => {
          const textColor = sex === s ? colors.orange : colors.brown;
          return (
            <RadioButton
              value={s}
              rootColor={colors.brown}
              pointColor={colors.orange}
              iconSize={20}
              iconInnerSize={10}
            >
              <P3Styled style={{ color: textColor }}>{s}</P3Styled>
            </RadioButton>
          );
        })}
      </RadioGroup>
    </InputWrapper>
  );
}

const P3Styled = styled(T.P2)`
  margin: 0;
`;
