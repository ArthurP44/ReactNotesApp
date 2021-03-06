import React, {useState} from 'react';
import styled from '@emotion/styled'
import { firebaseDb } from '../firebase_config';

const {nanoid} = require('nanoid');

export const Sender = ({updateMessages, ...props}) => {
    //state
    const [message, setMessage] = useState('')
    const [isHovered, setIsHovered] = useState(false)


    const handleChange = (event) => {
        const value = event.target.value
        setMessage(value)
    }

    return <TextBox {...props}>
                <TextZone onChange={handleChange} value={message}/>
                <SendButton onClick={() => {
                    sendMessage(message)
                    setMessage('')
                    }}
                    onMouseEnter={()=> setIsHovered(true)}
                    onMouseLeave={()=> setIsHovered(false)}
                    isHovered={isHovered}  
                    >
                    <TextSendButton isHovered={isHovered}>Send</TextSendButton>
                </SendButton>
            </TextBox>
} 

const sendMessage = async (message) => {
    const userId = nanoid();
    await firebaseDb.ref("messages" + "/" + userId).set(message)
}

const TextBox = styled.div`
    margin-top: 50px;
    border-radius: 15px;
    padding: 20px;
    background-color: #464241;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 160px;
    justify-content: space-around;
    width: 500px;
`

const TextZone = styled.textarea`
    border-radius: 16px;
    min-height: 80px;
    min-width: 300px;
    border: solid orange;

`

const SendButton = styled.button`
    padding: 5px 15px;
    background-color: ${props => props.isHovered ? 'white' : 'orange'};
    border-radius: 18px;
    width: min-content;
    cursor: pointer;
    transform: ${props => props.isHovered ? 'translateY(2px)' : 'translateY(0)'};
    transition: all 300ms ease-in-out;
`
const TextSendButton = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.isHovered ? 'orange' : 'white'};
    
`
