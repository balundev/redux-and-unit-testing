import React, { Component } from 'react';
import './App.css';
import GuessedWords from "./guessedWords/guessedWords";
import Congrats from "./congrats/congrats";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[{guessedWord: 'train', letterMatch: 3}]}/>
      </div>
    );
  }
}

export default App;
