import React, { Component } from 'react';

class Game extends Component{

    constructor(props){
        super(props);
        
        const valuesArray = this.makeQuestion();
        this.state = {
            value1 : valuesArray[0],
            value2 : valuesArray[1],
            value3 : valuesArray[2],
            proposedAnswer : valuesArray[3],
        };

    }

    updateState = (newArray)=>{
        this.setState((curstate)=>({
            value1 : newArray[0],
            value2 : newArray[1],
            value3 : newArray[2],
            proposedAnswer : newArray[3],
        }));
    }

    makeQuestion = () =>{
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        return [value1, value2, value3, proposedAnswer];
    }

    sumValues = ()=>{
        return(this.state.value1 + this.state.value2 + this.state.value3);
    }

    buttonFuncTrue = () =>{
        const newArray = this.makeQuestion();
        this.updateState(newArray);
        if(this.state.proposedAnswer === this.sumValues()){
            this.props.handleAnswer(true);
        }else{
            this.props.handleAnswer(false);
        }
    }

    buttonFuncFalse = () =>{
        const newArray = this.makeQuestion();
        this.updateState(newArray);
        if(this.state.proposedAnswer !== this.sumValues()){
            this.props.handleAnswer(true);
        }else{
            this.props.handleAnswer(false);
        }
    }
    
    reset = () =>{
        const newArray = this.makeQuestion();
        this.updateState(newArray);
        this.props.resetGame();
    }
    

    render(){
        return(
            <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
            <button onClick={this.buttonFuncTrue}>True</button>
            <button onClick={this.buttonFuncFalse}>False</button>
            <button onClick ={this.reset}>Reset</button>
            </div>
        )
    }

}


export default Game;