import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import {keyframes} from '@emotion/core'
import { Sender } from './components/save_notes';
import { Card } from './components/card';
import { Countor } from './components/messageCount'
import { firebaseDb } from './firebase_config';

const App = () => {
  //state
  const [messages, setMessages] = useState([])
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const ref = firebaseDb.ref(`messages`)
    const getMessages = (val) => {
      const messagesFormat = val.val() && Object.entries(val.val()) || []
        setMessages(messagesFormat)
    }
    ref.on('value', getMessages)

    return () => ref.off("value", getMessages)
}, [])

  return <MainWrapper>
    <Sender/>
    <Countor></Countor>
    <WrapperCards>
      {
        messages.map(([id, message], index) => {
          return <MessagesWrapper key={index + 'messages'}>
                    <Card>{message}
                      <DeleteCardButton 
                      onMouseEnter={()=> setIsHovered(true)}
                      onMouseLeave={()=> setIsHovered(false)}
                      onClick={()=> removeMessage(id)}
                      isHovered={isHovered}>
                      <TextDeleteButton/>
                    </DeleteCardButton>
                    </Card>
                    
                  </MessagesWrapper>
        })
      }
    </WrapperCards>
    <WrapperAnimation>
      <Animation/>
    </WrapperAnimation>
  </MainWrapper>
}

const removeMessage = async(id) => {
  await firebaseDb.ref(`messages/${id}`).remove()
} 

const DeleteCardButton = styled.div`
    padding: 10px;
    background-color: ${props => props.isHovered ? 'white' : 'red'};
    border-radius: 50%;
    width: min-content;
    cursor: pointer;
    transform: ${props => props.isHovered ? 'translateY(2px)' : 'translateY(0)'};
    transition: all 200ms ease-in-out;
`

const TextDeleteButton = styled.div`
    color: ${props => props.isHovered ? 'red' : 'white'};
    
`

const MainWrapper = styled.div`
  background-color: #23201f;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WrapperCards = styled.div` 
`
const MessagesWrapper = styled.div`
  background-color: #464241 ;
  color: white;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 500px;
`

const WrapperAnimation = styled.div`
  position: absolute;
  top: 50%;
  right: 15%;
`
const AnimationSteps = keyframes`
  0%{
    transform: translateY(0px)
  }
  30%{
    transform: translateY(-250px)
  }
  60%{
    transform: translateY(5px)
  }
  73%{
    transform: translateY(-5px)
  }
  86%{
    transform: translateY(3px)
  }
  100%{
    transform: translateY(0)
  }
`
const Animation = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color :white;
  box-shadow: 3px 26px 110px -19px black;
  transform: translateY(0);
  animation: ${AnimationSteps} 1s ease-in-out infinite;
`

export default App;
