import React, { useState } from 'react';
import styled from '@emotion/styled'
import { Sender } from './components/save_notes';
import { Card } from './components/card';

const App = () => {
  //state
  const [messages, setMessages] = useState([])

  const updateMessages = (message) => {
    setMessages((messages) => [message, ...messages])
  }

  return <MainWrapper>
    <Sender updateMessages={(messageToUpdate) => updateMessages(messageToUpdate)}/>
    <WrapperCards>
      {
        messages.map((message, index) => {
          return <Card key={index + 'messages'}>{message}</Card>
        })
      }
    </WrapperCards>
  </MainWrapper>
}

const MainWrapper = styled.div`
  background-color: red;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WrapperCards = styled.div`
  
`

export default App;
