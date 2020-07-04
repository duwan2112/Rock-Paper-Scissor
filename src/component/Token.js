import React from "react";
import styled,{keyframes} from "styled-components";

const shadow= keyframes`

to{
  box-shadow: 0 0 0 40px rgba(255,255,255,.015), 0 0 0 80px rgba(255,255,255,.01),0 0 0 120px rgba(255,255,255,.005);
  transform: rotateZ(360deg) scale(1.1);
}


`


const box = keyframes`
to{  transform: rotateY(360deg) scale(1.1);}

`
const TokenStyled = styled.div`
  width: 130px;
  height: 125px;
  border: 15px solid ${(props) => props.color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  padding: ${(props) => (props.name ==="default") ? '16px' : '0px' };
  box-shadow: 0 5px 0px ${(props) => props.color.border};
  
  cursor: pointer;
  position: relative; 
  z-index: 2;
 animation: 1s ${({isShadowAnimated})=> isShadowAnimated ? shadow : ''} forwards; 
  ${({isShadowAnimated})=> isShadowAnimated && 'box-shadow: 0 0 0 0px rgba(255,255,255,.015), 0 0 0 0px rgba(255,255,255,.01),0 0 0 0px rgba(255,255,255,.005);' };
 
  
  
  &:active {
    transform: scale(0.9);
  }
  .box {
    display: flex;
    background: ${(props) => (props.name ==="default") ? '#122343' : 'white' };
    justify-content: center;
    align-items: center;
    box-shadow: 0 -4px 0 ${(props) => (props.name ==="default") ? '122343' : '#BABFD4' };
    flex: 1;
    align-self: stretch;
    border-radius: 50%;
    img{
      width: 40%;
      animation: 1s ${({isShadowAnimated})=> isShadowAnimated ? box : ''} ;}
    
  }
  @media screen and (min-width: 1024px){
     width: 200px;
     height: 195px;
  }
`;

const colors = {
  paper: {
    base: "#516ef4",
    border: "#2543c3",
  },
  rock: {
    base: "#de3a5a",
    border: "#980e31",
  },
  scissors: {
    base: "#eca81e",
    border: "#c76c14",
  },
  default: {
    base: "transparent",
    border: "transparent",
  }
};

export default function Token({ name='default',onClick, isShadowAnimated = false }) {


  function handledClick(){
    if(onClick){
      onClick(name);
    }
   

  }
  const color = colors[name]
  return (
    <TokenStyled onClick={handledClick} name={name} color={color} isShadowAnimated={isShadowAnimated}>
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt="" />
      </div>
    </TokenStyled>
  );
}
