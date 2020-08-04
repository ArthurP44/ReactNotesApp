import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import { Sender } from './components/save_notes';
import { Card } from './components/card';

const App = () => {
  const [messages, setMessages] = useState([])

  return <MainWrapper>
    <Sender/>
    <Card></Card>
  </MainWrapper>
}

const MainWrapper = styled.div`
  background-color: red;
  height: 100%;
`

export default App;
