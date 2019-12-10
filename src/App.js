import React, { Component } from 'react';
import NoteContainer from './components/NoteContainer/NoteContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app" >
        <div className="app-header">
          Sticky Notes
        </div>
        <NoteContainer />
      </div>
    )
  }
}

export default App;
