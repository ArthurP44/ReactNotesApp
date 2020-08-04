import React, {useState} from 'react';
import styled from '@emotion/styled'

export const Sender = ({updateMessages, ...props}) => {
    //state
    const [message, setMessage] = useState('')

    const handleChange = (event) => {
        const value = event.target.value
        setMessage(value)
    }


    return <TextBox {...props}>
        <textarea onChange={handleChange}/>
        <button onClick={() => updateMessages(message)}>Send</button>
    </TextBox>
} 

const TextBox = styled.div`
    background-color: yellow;
`
