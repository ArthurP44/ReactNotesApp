import React from 'react';
import styled from '@emotion/styled'

export const Sender = ({...props}) => {

    return <TextBox {...props}>
        <textarea/>
        <button>Send</button>
    </TextBox>
} 

const TextBox = styled.div`
    background-color: yellow;
`
