import React, { useState,useContext } from "react";
import styled from "styled-components";
import Token from "./Token";
import {WhiteButton} from "./Button";
import {ScoreContext} from '../App';
const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2;
  }
  .in-game {
    text-transform: uppercase;
    text-align: center;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .results{
     text-align: center;
     h2{
       
        text-transform: uppercase;
       font-size: 56px;
       margin: 0px;
     }
   
  }
  .line {
    display: ${({ player }) => (!player ? "block" : "none")};
    height: 14px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 200px;
    top: 60px;
    &:before {
      content: "";
      height: 14px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: "";
      height: 14px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }
  @media screen and  (min-width: 1024px)
  {

    /*grid-gap: 30px 140px;*/
   
    grid-template-columns: 300px 300px;
    ${({player,results}) => (player && results) && 'grid-template-columns: 300px 110px 110px 300px;'}
    & div:nth-of-type(3) {
      ${({player, results}) => (player && results) && 'grid-column: 2/4;grid-row: 1'};
    
    
  }
    .line{
      width: 270px;
    }
   .results {
     display: flex;
     align-items: center; 
     justify-content: center;
     flex-direction: column;
   }
    .in-game{
      font-size: 1em;
      display: flex;
      flex-direction: column;
      > div {
           order: 2;
      }
      > p {
          order: 1;
          margin-bottom: 2em;
      }

    }
  }
`;

const elements = ["paper", "scissors", "rock"];

export default function Table() {
  const [results, setResult] = useState('');
  const [housePick, sethousePick] = useState('default');
  const [player, setUserActive] = useState(false);
  const [pick, setPick] = useState("");
  const [iWon, setIwon] = useState(false);

  function getRandomInit(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function youWin(name, house){
    

    if(house=== name){
      return 'draw'
     }

    else if(name === 'paper')
    {

       if(house === 'scissors')
       {
           return 'lose'
       }
       if(house === 'rock')
       {
           return 'win'
       }
    }
    else if(name === 'scissors')
    {
       if(house === 'paper')
       {
        return 'win'
       }
       if(house === 'rock')
       {
        return 'lose'
       }
    }
    else if(name === 'rock')
    {
       if(house === 'paper')
       {
        return 'lose'
       }
       if(house === 'scissors')
       {
        return 'win'
       }
    }
  
  }
  
  function launchhousePick(){
    return new Promise((resolve, reject)=>{ 
      
      let pick
      const interval = setInterval(()=>{ 
        pick=elements[getRandomInit(0, 3)];
          sethousePick(pick)
        },200) 
      setTimeout(()=>{
        clearInterval(interval);
          resolve(pick)
        },2000)})
    
      
  }
  const {score,setScore} = useContext(ScoreContext);

  async function  onClick(name) {
    setUserActive(true);
    setPick(name);
    const house= await launchhousePick();
    const result = youWin(name, house);
    setResult(result);
     if(result==='win'){
       setScore(score+1);
       
     }
     else if(result==='lose')
     {
       setScore(0)
     }

  }

  function handleTryAgainClick(){
      setUserActive(false);
      setResult('');
  }
  return (
    <TableStyled player={player} results={(results !== '')}>
      <span className="line"></span>
      {!player ? (
        <React.Fragment>
          <Token name="paper" onClick={onClick} />
          <Token name="scissors" onClick={onClick} />
          <Token name="rock" onClick={onClick} />
        </React.Fragment>
      ) : (
        <>
          <div className="in-game">
            <Token name={pick} isShadowAnimated={(results==='win')} />
            <p> You Picked</p>
          </div>
          <div className="in-game">
            <Token name={housePick} isShadowAnimated={(results==='lose')}/>
            <p> The House Picked</p>
          </div>
          <div className="results">
            {
              results && (
                <>
                 <h2> YOU {results}</h2>
                 <WhiteButton  onClick={handleTryAgainClick}> TRY AGAIN </WhiteButton> 
                </>
                )

            }
           
           
          </div>
        </>
      )}
    </TableStyled>
  );
}
