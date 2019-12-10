import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleBlur() {
    /**
     * make an api call to update a note
     * with the values entered in the form
     * and send the response to NoteContainer
     * component to update the main state.
     */

     console.log(this.state, '<><><>', this.props.note.id);
     this.state.id = this.props.note.id; // simulating id that will be return along side response
     this.props.updateNote(this.state) // replace this.state with the response from api after successful update
  }

  render() {
    const { title, description } = this.state;
    return (
      <div className="tile">
        <form onBlur={this.handleBlur.bind(this)}>
          <input type="text" className="input" name="title" placeholder="Enter a title" value={title} onChange={this.handleChange.bind(this)}/>
          <textarea className="input" name="description" placeholder="describe the note" value={description} onChange={this.handleChange.bind(this)}></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm;
