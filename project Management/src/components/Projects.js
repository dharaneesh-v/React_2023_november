import { Grid } from "@mui/material";
import { useState,useEffect } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ColorButton from '@mui/material/Button';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Button from '@mui/material/Button';
import { Axios } from "axios";


function createData(Project_Name, Project_Requirement, Project_Description, TL, Started_On,DeadLine,Status) {
  return { Project_Name, Project_Requirement, Project_Description, TL, Started_On,DeadLine,Status };
}

const rows = [
    createData('Project Managent System','React JS','To make Project Management System','Dharaneesh','20-11-2023','01-01-2024',"Ongoing"),
    createData(),
    createData(),
    createData(),
    createData(),
  ];

 

function Project()
{ 

    return(
        <div className="Project">
          
            <Grid container spacing={2}>
                <Grid xs={12} md={12}>
                <div>
                    <br></br><br></br>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{backgroundColor:'purple',color:"white"}}>
                          <TableRow>
                            <TableCell>Project Name</TableCell>
                            <TableCell align="right">Project Requirement</TableCell>
                            <TableCell align="right">Project Description</TableCell>
                            <TableCell align="right">Team Leader</TableCell>
                            <TableCell align="right">Started On</TableCell>
                            <TableCell align="right">DeadLine</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.Project_Name}
                              </TableCell>
                              <TableCell align="right">{row.Project_Requirement}</TableCell>
                              <TableCell align="right">{row.Project_Description}</TableCell>
                              <TableCell align="right">{row.TL}</TableCell>
                              <TableCell align="right">{row.Started_On}</TableCell>
                              <TableCell align="right">{row.DeadLine}</TableCell>
                              <TableCell align="right">{row.Status}</TableCell>
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
            <Link to='/Addprojects'><ColorButton variant="contained">Add New Project</ColorButton></Link>
            <br></br>
        </div>
    )
}
export default Project;