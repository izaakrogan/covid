import React from 'react';
import styled from 'styled-components';
import InputWrapper from './InputWrapper';
import colors from '../style/colors';

interface Props {
  age: number;
  setAge: (age: number) => void;
}

export default function Age({ age, setAge }: Props) {
  function handleChange(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const number = Number(value);
    setAge(number);
  }

  return (
    <InputWrapper title="Age:">
      <Input type="text" value={age} onChange={handleChange} />
    </InputWrapper>
  );
}
const Input = styled.input`
  border: 1px solid ${colors.orange};
  padding: 10px;
  font-family: 'Lexend';
  outline-color: ${colors.orange};
  font-size: 18px;
`;
