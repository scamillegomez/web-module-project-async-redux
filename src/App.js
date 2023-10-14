import React from 'react';
import './App.css';
import { UnControlled } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import Joke from './components/Joke';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 800px;
`

function App() {
  return (
    <StyledContainer>
    {/* <div className="App"> */}
      
      <Joke />
    {/* </div> */}
    </StyledContainer>
    
  );
}

export default App;