import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
const RulesStyled = styled.div`
  text-align: center;
  &::before{
      content: '';
      display: ${({visible})=> visible ? 'block' : 'none' };
      position: absolute;
      z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
    }
  .rules-overlay {
    background: white;
    position: fixed;
    padding: 4em 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #3b4262;
    font-weight: 700;
    font-family: Arial;
    letter-spacing: -2px;
    h2 {
      margin-bottom: 1em;
    }
    .close-button{
      cursor: pointer; 
        margin-top: 2em;
    }
    
  }
  @media screen and (min-width: 768px)
  {
.button{
  position: fixed; 
  right: 2em; 
  bottom: 2em;
}
.rules-overlay{
  width: 400px;
  margin: auto;
  border-radius: 10px;
  top: 0;
  bottom: initial;
  transform: translateY(30%);
  padding: 2em;
  box-sizing: border-box;
  h2{
  font-size: 32px;
  margin: 0 0 1.2em 0;
  align-self: flex-start;
}
}
.close-button {
  position: absolute;
  right: 2em;
  top: 1em;
  top: .8em;
}

  }
`;

export default function Rules() {
  const [visible, setVisible] = useState(false);

  function handleClick() {
      setVisible(!visible);
  
  }


  return (
    <RulesStyled visible={visible}>
      {visible && (
        <div className="rules-overlay">
          <h2>RULES</h2>
          <img src="./images/image-rules.svg" alt="Game rules" />
          <img className="close-button" onClick={handleClick} src="./images/icon-close.svg" alt="Close the Rules" />
        </div>
      )}

      <Button onClick={handleClick} className="button"> RULES </Button>
    </RulesStyled>
  );
}
