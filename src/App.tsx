import React, { useState } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

import UserInputsPanel from './components/UserInputsPanel';
import Right from './components/Right';

const App = () => {
  const [baseRate, setBaseRate] = useState(2);
  const [page, setPage] = useState();

  return (
    <Container>
      <UserInputsPanel setBaseRate={setBaseRate} setPage={setPage} />
      <Right baseRate={baseRate} page={page} setPage={setPage} />
    </Container>
  );
};

export default hot(App);

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
`;
