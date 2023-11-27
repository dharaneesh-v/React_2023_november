import { Box, Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import './Addtask.css';
export default function Addtask()
{
    return(
        <div className="AddtaskBody">
            <br></br>
            <Grid container spacing={2}>
                <Grid xs={12} md={3}></Grid>
                <Grid xs={12} md={6}>
            <div className="form">
            <Box sx={{ fontFamily: 'Monospace', fontSize: 'h4.fontSize', m: 1 }}> Add a New Task</Box><br></br><br></br>
            <form>
            <TextField id="outlined-basic" label="Project Name" variant="outlined" required/><br></br><br></br>
            <TextField id="outlined-basic" label="Task" variant="outlined" required/><br></br><br></br>
            <TextField
                  id="outlined-multiline-static"
                  label="Task Details"
                  multiline
                  rows={4}
                  required
                /><br></br><br></br>
            <TextField id="outlined-basic" label="Deadline" variant="outlined" required/><br></br><br></br>
            <TextField id="outlined-basic" label="Project Status" variant="outlined" required/><br></br><br></br>
            <TextField id="outlined-basic" label="Task Status" variant="outlined" default="Assigned" required/><br></br><br></br>
            <Button type="submit">Add to Tasks</Button>
            </form>
            </div>
            </Grid>
            <Grid xs={12} md={3}></Grid>
            </Grid>
            <br></br>
        </div>
    )
}