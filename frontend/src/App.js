import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/NavBar';
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import NoteList from './components/NoteList'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route path='/' Component={NoteList} />
          <Route path='/edit/:id' Component={CreateNote} />
          <Route path='/create' Component={CreateNote} />
          <Route path='/user' Component={CreateUser} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
