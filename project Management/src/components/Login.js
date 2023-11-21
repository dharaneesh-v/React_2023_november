import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import './Login.css';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Home from './Home';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Login() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);    
  }
  const forgotPass=()=>
  {
    alert("Close Your Eyes and Try To Remember Your Password");
  }
  
  return (
    <div className='LogBody'>
      <AppBar position='static' color="transparent">
            <Toolbar>
                    <Link to='/home'><Button color='inherit'>Home</Button></Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> D-PROJECTS</Typography>
                    <Link to='/register'><Button color="inherit">Register</Button></Link>
                    <Link to='/login'><Button color="inherit">Login</Button></Link>                    
             </Toolbar>
       </AppBar>
      <br></br><br></br><br></br><br></br>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
            <div className='side'>
              <br></br><br></br><br></br>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKKsZwz7Fobv8vAk9kOwlRyI9HHdXKVZOdg&usqp=CAU' id='img'></img>
              <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
                    Hello,<br></br>
                    welcome back to D-Projects.
                    <br></br> We've missed you, and are happy that you're back.
                    <br></br> Quite a bit has changed while you've been gone
               </Box>
                <h5></h5>
            </div>
          
        </Grid>
        <Grid item xs={12} md={4}>
        <div className='login'>
          <br></br>
            <h2>LogIn</h2>
            <form>
            <TextField style={
              {color:'white'}
            } id="outlined-basic" type='email' label="Email" variant="outlined" required/>
            <br></br>
            <br></br>
            <TextField id="outlined-basic" type='password' label="Password" variant="outlined" required/>
            <br></br>
            <br></br>
            <label>
            <FormControlLabel control={<Checkbox />} label="Remember Me." />
            </label><br></br><br></br>
          <Link to="/home"><LoadingButton
            type='submit'
          onClick={handleClick}
          loadingPosition="center"
          variant="contained"
          color="error"
        >
          LogIn
          </LoadingButton>
          </Link>
            </form>
            <br></br>

            <h5><a href='' onClick={forgotPass}>Forgot Password</a></h5>
            
            <h5>Don't Have an Account ? <Link to="/register"><a>Create Account</a></Link></h5>
        </div>
            <br></br><br></br><br></br><br></br>
        </Grid>
      </Grid>
    </Box>
    
    </div>
  );
}