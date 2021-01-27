import React from 'react'
import styled from "styled-components"

export default function Subnote({style}) {
    return (
        <Container style={style}>
            <input />
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    z-index: -1;
    border: 1px solid blue;
`
