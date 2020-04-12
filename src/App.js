import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';


let win = 0;  

class App extends Component {
  
  state = {
    correctAnswer: 0,
    numQuestions: 0,
    result : '',
  };

  resetGame = ()=>{

    this.setState(currState=>({
      correctAnswer : 0,
      numQuestions : 0,
      result : '',
    }));

    win = 0;
  }
   

  handleAnswer = (answerisCorrect) =>{
    if(this.state.numQuestions === 10){
      this.setState(currState => ({
         correctAnswer : 0,
         numQuestions : 0,
         result : '',
      }));
    }

    if(answerisCorrect){
      this.setState(currState =>({
        correctAnswer : currState.correctAnswer + 1
      }));

      console.log(this.state.correctAnswer);

      
    }

    console.log(this.state.correctAnswer);
    
    this.setState(currState =>({
      numQuestions : currState.numQuestions + 1
    }));
    

    if(this.state.correctAnswer === 9 && answerisCorrect){
      this.setState((currState)=>({
        result : 'CONGRATULATIONS!!! You Win!!!',
        // correctAnswer : 10,
      }));

      
    }
    
    
     
  };

  

  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer = {this.handleAnswer} resetGame={this.resetGame} />
          <Score correctAnswer= {this.state.correctAnswer} numQuestions={this.state.numQuestions}  result ={this.state.result}/>
        </div>
      </div>
    );
  }
}

export default App;
