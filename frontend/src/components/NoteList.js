import axios from 'axios'
import React, { Component } from 'react'
import { format } from 'timeago.js'
import {Link} from 'react-router-dom'

export default class NoteList extends Component {

  state = {
    notes: []
  }

  async getNotes() {
    const res = await axios.get('http://localhost:4000/api/notes');
    this.setState({
      notes: res.data
    })
  }

  async componentDidMount() {
    this.getNotes();
  }

  deleteNote = async (id) => {
    await axios.delete('http://localhost:4000/api/notes/' + id);
    this.getNotes();
  }

  render() {
    return (
      <div className='noteList'>
        {
          this.state.notes.map(note => (
            <div className="col-md-3 p-2" key={note._id}>
              <div className="card noteCard">
                <div className="card-header d-flex justify-content-between">
                  <h5>{note.title}</h5>
                </div>
                <div className="card-body">
                  <p>{note.content}</p>
                  <p>{note.author}</p>
                  <p>{format(note.date)}</p>
                </div>
                <div className="card-footer">
                  <button className='btn btn-danger' onClick={() => this.deleteNote(note._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
