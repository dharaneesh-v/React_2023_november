import { Today } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';
import './Addprojects.css';


function Addprojects()
{
    return(
        <div className="addproject">
          <br></br>
            <h2 id='head'>ADD NEW PROJECT</h2>
            <form>
                <TextField id="outlined-basic" label="Project Name" variant="outlined" /><br></br><br></br>
                <TextField
                  id="outlined-multiline-static"
                  label="Project Requirement"
                  multiline
                  rows={4}
                /><br></br><br></br>
                <TextField
                  id="outlined-multiline-static"
                  label="Project Description"
                  multiline
                  rows={4}                  
                /><br></br><br></br>
                <TextField id="outlined-basic" label="Start Date" variant="outlined" type='date' defaultValue={Today}/>&emsp;
                <TextField id="outlined-basic" label="Deadline" variant="outlined" type='date' /><br></br><br></br>
                <Button variant="contained" type='submit'>Add Project</Button>
            </form>
            <br></br>
        </div>
    )
}
export default Addprojects;