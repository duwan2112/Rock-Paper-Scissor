import React,{createContext,useState} from 'react';
import styled from 'styled-components';
import Header from './component/header';
import Wrapper from './component/Wrapper';
import Table from  './component/Table';
import Rules from './component/Rules'; 


export const ScoreContext= createContext(0);
const AppStyled = styled.main`
 background-image: radial-gradient(circle at top, #1F3757 20%,  #131537 100%);
 color: white;
 .app-content {
   box-sizing: border-box;
   padding: 2em ; 
   min-height: 100vh;
   display: flex; 
   flex-direction: column; 
   justify-content: space-between;
 }
`


function App() {
  
  
  const [score, setScore] = useState(0);

   return (
     <ScoreContext.Provider value={{score, setScore }}> 
        <AppStyled> 
       <Wrapper>
         <div className="app-content"> 
         <Header/>
         <Table/>
              <Rules/> 
              </div> 
          </Wrapper>  
           </AppStyled> 
       </ScoreContext.Provider>
    
   
   );
 


}



export default App;
