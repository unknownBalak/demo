import React, { Component } from "react";
// import { toCelsius, tryConvert } from "../calCulation";
import TempInput from "./TempInput";

function convertToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}
function convertToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function tryConvert(temprature, cb){
    if(temprature==="") return "";
   temprature = parseFloat(temprature);
   let changedVal = cb(temprature);
   return changedVal.toString();
}



class TempParent extends Component{
   
    constructor(props){
        super(props);
       this.state = {tempratue: "", scale :"f" };  
   }
   updateChangeInCelcius = (tempratue) =>{
      this.setState({tempratue: tempratue, scale:"c"});
  }
  updateChangeInFarenheit = (temperature) =>{
    this.setState({tempratue: temperature, scale:"f"});
}
  
  
    render(){
         let scale = this.state.scale;
         let tempratue = this.state.tempratue;

         let fahrenheit =  scale=== "c" ?  tryConvert(  tempratue , convertToFahrenheit) : tempratue;
         let celsius =  scale=== "f" ?  tryConvert(  tempratue , convertToCelsius) : tempratue;

       return (
    <div>           
        
        <TempInput scale="c" tempratue={celsius} handleTemprature={this.updateChangeInCelcius} />
        
        {/* //will create a child that will take input from user and covert to respective measure of temprature. */}
        
        
        <TempInput scale="f" tempratue={fahrenheit} handleTemprature={this.updateChangeInFarenheit} />
        </div>
       )
       
       
   }
}

export default TempParent;