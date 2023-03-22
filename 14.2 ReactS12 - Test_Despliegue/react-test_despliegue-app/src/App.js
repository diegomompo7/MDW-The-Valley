import './App.css';
import React from 'react';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import Note from './components/Note/Note'
import Togglable from './components/Togglable/Togglable'

function App() {
  return (
    <div className='App'>
      <h1>Prueba de testing</h1>

      <HashRouter>
        <div className='links'>
          <Link to='/'>HomePage</Link>
          <br />
          <Link to='/notes'>NotesPage</Link>
          <br />
          <Link to='/toggles'>TogglablePage</Link>
          <br />
        </div>

        <Routes>
          <Route path='/notes' element={<Note></Note>}></Route>
          <Route path='/toggles' element={<Togglable></Togglable>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;