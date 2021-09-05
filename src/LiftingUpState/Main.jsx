import React, { useState } from 'react'
import MainChild from './MainChild';
import Footer from "./Footer";
function Main() {
  const [state, changeState] = useState(1);

  const alterState = () => {
        console.log("This function is being called")
        changeState(prev => prev +=1);
  
    }
    return (
        <div>
             <MainChild changeState={alterState} />
              <Footer counter ={state} />
         </div>
    )
}

export default Main
