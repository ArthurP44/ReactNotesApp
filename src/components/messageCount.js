import React, {useState} from 'react';
import styled from '@emotion/styled'

export const Countor = () => {
    const [count, setCount] = useState(0);

    return <Count>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Add 1 !</button>
            </Count>
}

const Count = styled.div`
    background-color: green;
    `


