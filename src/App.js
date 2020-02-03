import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList.js'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1>Characters From</h1>
        <h1>Tolkien's Middle Earth</h1>
        <CharacterList/>
      </div>
    );
  }
}

export default App;
