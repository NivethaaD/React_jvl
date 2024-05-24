import React from "react";

class Car1 extends React.Component{

    constructor(){
        super();
        this.state={color:"red",year:"4568"}
    }
    render(){
        return <>
            <h1>My car is {this.state.color} and year is {this.state.year}</h1>
            <button onClick={()=>{this.setState(previousState=>{return {...previousState,year:"9999"}})}}>Change</button>
        </>
    }
}
export default Car1;