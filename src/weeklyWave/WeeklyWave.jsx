import React, { useEffect, useState } from 'react'
import { updateWeek } from './calculateDay';

function WeeklyWave() {
     let week = new Array(6).fill( <div style={{border:"2px solid"}}>{Math.random()*10}</div>);
     const [counter, setCounter] = useState(0);
     const [filteredData, setFilteredData] = useState([])
     const  styles={
         display: "flex",
         justifyContent :"space-evenly",
        alignItems: "center",
         height: "100vh",
     }
  const style1 ={
      cursor:"pointer",
  }

useEffect(()=>{
   let data=  updateWeek([], counter);
       setFilteredData(data);
},[counter])
  
function  leftSide() {
   setCounter(prev => prev -=1);
}
function rightSide() {
   setCounter(prev => prev +=1);
}
 console.log(filteredData);
    return (
        <div>
           <div className="weeklyWave" style={styles}>
           <span style={style1} onClick={leftSide} >Left </span> 
               {week} <span style={style1} onClick={rightSide}>Right
           </span> 
        </div>
            </div>
       
    )
}

export default WeeklyWave;
