import React from 'react';
import styled from '@emotion/styled'

export const Card = ({children}) => {
    
return <MessageCard>{children}</MessageCard>
}

const MessageCard = styled.div`
    font-size: 19px;
    display: flex;
    flex-direction: row;
`
