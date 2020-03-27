import React, { useState } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

import UserInputsPanel from './components/UserInputsPanel';
import Visualise from './components/Visualise';

const App = () => {
  const [baseRate, setBaseRate] = useState(2);
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);

  setTimeout(() => setLoaded(true), 100);
  return (
    <Container loaded={loaded}>
      <UserInputsPanel setBaseRate={setBaseRate} setPage={setPage} />
      <Visualise baseRate={baseRate} page={page} setPage={setPage} />
    </Container>
  );
};

export default hot(App);
interface Container {
  loaded: boolean;
}
const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  display: flex;
  opacity: ${({ loaded }: Container) => (loaded ? 1 : 0)};
  transition: opacity 1s;
`;
