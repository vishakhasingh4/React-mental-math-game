import React, { Component } from 'react';


const Score = props => {
    return (
      <p className="text">
        Your Score: {props.correctAnswer}/{props.numQuestions}
        <p>{props.result}</p>
      </p>
    );
  };

export default Score;