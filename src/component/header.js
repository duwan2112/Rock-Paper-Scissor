import React from 'react'
import styled from 'styled-components';
import Score from './score';


const StylesdButton= styled.div`
   border: 3px solid rgba(255,255,255, .29);
   border-radius: .5em;
   color: white;
   padding: 12px 12px 12px 23px;
   display: flex; 
   justify-content: space-between;
   align-items: center;
   h1 {
       line-height: 16px;
       font-weight: 700;
       font-size: 18px;
       margin: 0px;
       @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
      font-family: 'Barlow Semi Condensed', sans-serif;
   }

   @media screen and (min-width: 768px){
       padding: 24px 24px 24px 24px;
    h1{
        
        font-size: 36px;
        line-height: .9;
      
    }
}
`

export default function Header() {
    return (
        <StylesdButton>
            <h1> Rock <br/>  Paper <br/>  Scissors </h1> 
            <Score/> 
        </StylesdButton>
    )
}




