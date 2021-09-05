import React, { Component } from "react";
 
class TempInput extends Component{
      
   updateChange = (e) =>{
       this.props.handleTemprature(e.target.value);
    }
    render(){
        let scale = this.props.scale;
        let tempratue = this.props.tempratue;

        return (
         <div style={{display:"block", margin:"20px"}}>
         <span>Enter temprature in {scale}   </span> 
        <input onChange={this.updateChange}  value={tempratue} />   
          </div>
       )


       //will create a child that will take input from user and covert to respective measure of temprature.
       
   }
}

export default TempInput;