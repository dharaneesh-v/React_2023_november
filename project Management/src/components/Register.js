import './Register.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 

function Register()
{
    return(
        
        <div className='RegBody'>
            <AppBar position='static' color="transparent">
            <Toolbar>
                    <Link to='/home'><Button color='inherit'>Home</Button></Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> D-PROJECTS</Typography>
                    <Link to='/register'><Button color="inherit">Register</Button></Link>
                    <Link to='/login'><Button color="inherit">Login</Button></Link>
                    
             </Toolbar>
       </AppBar>
            <br></br><br></br><br></br>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>
                    <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
                    Welcome to D-Projects, where dreams become a reality. Join us as we make a positive impact on the world.
                    </Box>
                <img className='RegPNG' src='https://freepngimg.com/save/54802-illustrations-images-png-image-high-quality/1110x1110'></img>
          </Grid>
          <Grid xs={12} md={4}>           
                <div className="Reg">
                    <br></br>
                    <h2>Register</h2>
                    <form>
                    <TextField id="standard-basic" label="Username" variant="standard" required/><br></br><br></br>
                    <TextField id="standard-basic" label="Email" variant="standard" type='email' required/><br></br><br></br>
                    <TextField id="standard-basic" label="Password" variant="standard" type='password' required/><br></br><br></br>
                    <TextField id="standard-basic" label="Confirm Password" variant="standard" type='password' required/><br></br><br></br>
                    <Button type='submit' variant="contained"> Register  </Button>
                    <br></br><br></br>
                    </form>
                </div>
          </Grid>
          <Grid xs={12} md={4}>
                <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
                    YOUR THOUGHTS INTO WORKING MODELS
                </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
       
    )
}
export default Register;