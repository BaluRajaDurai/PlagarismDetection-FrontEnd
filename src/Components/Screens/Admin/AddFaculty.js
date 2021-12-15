import AdminNavbar from "../../Headers/AdminNavbar";
import { ThemeProvider} from "@material-ui/core/styles";
import Theme from "../../Theme";
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';


const AddFaculty = () => {

    return ( 
        <div>
            <ThemeProvider theme={Theme}>   
                <AdminNavbar/>
            </ThemeProvider>
          <div class="mt-5">
          <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 128,
          marginTop:'2%'
        },
      }}
    >
      
      <Paper elevation={3} >
        <div class="mt-5 ms-5 ">
             <PeopleOutlineTwoToneIcon color="primary" style={{ fontSize: 50 }}  />
             <span class="ms-3 fw-bold fs-5 ">New Faculty </span>
             <p class="ms-5"></p>
        </div>
        
     
      </Paper>
    </Box>
          </div>
          
        </div>
     );
}
 
export default AddFaculty;