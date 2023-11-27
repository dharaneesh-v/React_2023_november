import { Grid } from "@mui/material";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ColorButton from '@mui/material/Button';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 


function createData(sno,Project_Name, Task, DeadLine, PStatus, TStatus,Action) {
  return {sno, Project_Name, Task, DeadLine, PStatus, TStatus,Action };
}

const rows = [
    createData(1,'Project Managent System','React JS','20-11-2023','ongoing',"Ongoing"),
    createData(),
    createData(),
    createData(),
    createData(),
  ];

function Tasks()
{      
    return(
        <div className="Tasks">
            <Grid container spacing={2}>
                <Grid xs={12} md={12}>
                <div>
                    <br></br><br></br>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{backgroundColor:'purple',textDecorationColor:"white"}}>
                          <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell>Project Name</TableCell>
                            <TableCell align="right">Task</TableCell>
                            <TableCell align="right">DeadLine</TableCell>
                            <TableCell align="right">Project Status</TableCell>
                            <TableCell align="right">Task Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell >{row.sno}</TableCell>
                              <TableCell component="th" scope="row">
                                {row.Project_Name}
                              </TableCell>
                              <TableCell align="right">{row.Task}</TableCell>
                              <TableCell align="right">{row.DeadLine}</TableCell>
                              <TableCell align="right">{row.PStatus}</TableCell>
                              <TableCell align="right">{row.TStatus}</TableCell>
                              <TableCell align="right"><Button variant="outlined">Action</Button></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </div>
                </Grid>
            </Grid>
            <br></br>
            <Link to='/AddTask'><Button variant="contained">Add New Task</Button></Link>
            <br></br>
        </div>
    )
}
export default Tasks;