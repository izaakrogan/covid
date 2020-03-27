import React from 'react';
import styled from 'styled-components';

interface Props {
  multiCondition: boolean;
  setMultiCondition: (checked: boolean) => void;
}

export default function Checkbox({ multiCondition, setMultiCondition }: Props) {
  function handleCheck(e) {
    const { checked } = e.target;
    setMultiCondition(checked);
  }

  return (
    <Container>
      <Input
        type="checkbox"
        value="Submit"
        checked={multiCondition}
        onChange={handleCheck}
      />
      <label>I have more than one condition</label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  height: 30px;
  width: 30px;
`;
