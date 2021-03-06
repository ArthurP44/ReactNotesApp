import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'

export const Countor = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `vous avez cliqué ${count} fois`;
    })

    return <Count>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Add 1 !</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </Count>
}

const Count = styled.div`
    margin-top: 20px;
    background-color: red;
    `


