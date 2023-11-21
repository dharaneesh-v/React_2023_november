import './App.css';
import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { Component, useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Grid } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  
  return (
    <div className="App">
    <Router>
        <Routes>

          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
