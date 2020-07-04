import React from 'react'
import styled from 'styled-components'


const ButtonStyled= styled.div`
display: inline-flex;
border: 2px solid white;
border-radius: .4em;
min-width: 128px;
padding: .7em;
box-sizing: border-box;
justify-content: center;
font-weight: 700;
cursor: pointer;
letter-spacing: 2.5px;
:hover {
    background: white; 
    color: black;

}
`



export default function Button({children,...props}) {
    return (
        
        <ButtonStyled {...props}>
    
        {children}
        </ButtonStyled>
    )
}

export const WhiteButton = styled(ButtonStyled)`
        background: white;  
        color: #101a3f;
        min-width: 220px;
        
        `