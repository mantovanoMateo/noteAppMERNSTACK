import React, { Component } from 'react'

import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



export default class CreateNote extends Component {

  state = {
    users: [],
    userSelected: '',
    title: '',
    content: '',
    date: new Date(),
    _id:''
  }


  

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/users');
    this.setState({ 
      users: res.data.map(user => user.username),
      userSelected: this.state.users[0] 
    });
  }

 

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected
    }
    if(this.state.editing==true){
      await axios.put('http://localhost:4000/api/notes/'+this.state._id, newNote);
    }else{
      await axios.post('http://localhost:4000/api/notes', newNote);
    }
    
    
    
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeDate = date => {
    this.setState({ date });
  }



  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create Note</h4>
          <form onSubmit={this.onSubmit}>

            {/* SELECT  USER */}
            <div className="form-group">
              <select className='form-control' name="userSelected" onChange={this.onInputChange}>
                {
                  this.state.users.map(user =>
                    <option key={user} value={user}>
                      {user}
                    </option>)
                }
              </select>
            </div>
            <br />
            <div className="form-group">
              <input type="text" className='form-control' placeholder='Title' name="title" id="" required onChange={this.onInputChange} />
            </div>
            <br />
            <div className="form-group">
              <textarea name="content" className='form-control' placeholder='content' required onChange={this.onInputChange}></textarea>
            </div>
            <br />
            <div className="form-group">
              <DatePicker
                className='form-control'
                selected={this.state.date}
                onChange={this.onChangeDate} />
            </div>
            <br />
            <button type='submit' className='btn btn-primary'>
              Save
            </button>
          </form>
        </div>
      </div>
    )
  }
}
