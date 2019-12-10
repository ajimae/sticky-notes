import React, { Component } from 'react';
import { data } from './fixtures';
import Note from '../Note/Note';
import update from 'immutability-helper';
import NoteForm from '../NoteForm/NoteForm';
import './NoteContainer.css';

class NoteContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentlyEditingNote: null
    }
  }

  componentDidMount() {
    /**
     * api call to get all notes
     * order by descending order of date created
     */
    Promise.resolve(data).then(data => {
      this.setState({
        notes: data
      });
    }).catch(error => console.log(error));
  }

  addNewNote() {
    /**
     * make a new call to api to create new note
     * use the response to update the state
     */
    const newNote = {
      id: this.state.notes.length + 1,
      title: '',
      description: ''
    };

    const note = update(this.state.notes, { $splice: [[0, 0, newNote]] })
    Promise.resolve(note).then(data => {
      this.setState({
        notes: data,
        currentlyEditingNote: newNote.id
      });
    });
  }

  updateNote(newNote) {
    const index = this.state.notes.findIndex(note => note.id == newNote.id);
    const note = update(this.state.notes, {[index]: { $set: newNote }})
    this.setState({
      notes: note
    });
  }

  render() {
    const { notes, currentlyEditingNote } = this.state;
    return (
      <div className="notes">
        <div>
          <button className="new-note-btn" onClick={this.addNewNote.bind(this)}>
            New Note
          </button>
        </div>
        {notes.map(note => {
          if (currentlyEditingNote == note.id) {
            return (
              <NoteForm key={note.id} note={note} updateNote={this.updateNote.bind(this)}/>
            )
          } else {
            return (
              <Note key={note.id} note={note} />
            )
          }
        })}
      </div>
    )
  }
}

export default NoteContainer;
