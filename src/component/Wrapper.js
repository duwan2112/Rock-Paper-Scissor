import React from 'react'
import styled from 'styled-components'


const WrapperStyled = styled.div`
max-width: 700px; 
margin : auto;

padding: 0 30px;
`





export default function Wrapper(props) {
    return (
        <WrapperStyled>
            {props.children}
        </WrapperStyled>
    )
}