import React, { Component } from 'react';
import './Note.css';

const Note = ({ note }) => {
  return (
    <div className="tile">
      <h4>{note.title}</h4>
      <p>{note.description}</p>
    </div>
  )
}

export default Note;
