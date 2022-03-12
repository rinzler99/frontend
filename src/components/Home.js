import { useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import { Avatar, Button, Stack , Grid, InputAdornment,
  TextField } from "@mui/material";
import Chip from '@mui/material/Chip';
import DataTable from './DataTable';
import Divider from '@mui/material/Divider';




const Home = ({setName}) => {
    const [loginData, setLoginData] = useState({
        username:'',
        password:''
      });



      function checkCred(){
          if(loginData.username === 'pradeep' && loginData.password === 'pradeep'){
            //   setLogin(true);
          }
      }

    return (
        <Grid Grid container >
            
            <Grid md={4} xs={12}>
            <Box className="form" >
        {/* <Stack spacing={2} className="form"> */}
        <h3 className="title">Welcome, Pradeep!</h3>
        
        <Stack spacing={3}>
        <Grid Grid container >
          <Grid md={3}></Grid>
          <Grid md={4}>
          <Chip label="You Gave"  color="error" />
          </Grid>
          <Grid md={3}>
          <Chip label="1000rs" variant="outlined" color="error" />
          </Grid>
          <Divider/>
          </Grid>
          <Divider/>
          
          <Grid Grid container >
          <Grid md={3}></Grid>
          <Grid md={4}>
          <Chip label="You will Get"  color="success" />
          </Grid>
          <Grid md={3}>
          <Chip label="1200rs" variant="outlined" color="success" />
          </Grid>
          <Divider/>
          </Grid>
          <Divider/>
          <Grid Grid container >
          <Grid md={3}></Grid>
          <Grid md={4}>
          <Chip label="Total Balance"  color="primary" />
          </Grid>
          <Grid md={3}>
          <Chip label="+200rs" variant="outlined" color="primary" />
          </Grid>
          <Divider/>
          </Grid>
          <Divider/>
          
          
        
        {/* <Chip label="You will Get" variant="outlined" color="success" />
        <h4 className="money">1200rs</h4>
        <Chip label="Total Balance" variant="outlined" color="primary" />
        <h4 className="money">+200rs</h4> */}
        </Stack>
        
        <Stack spacing={2} direction="row" className="stack1">
        <Button className="button1" variant="contained">Add Record</Button>
        <Button className="button2" variant="contained">Mark Paid</Button>
        <Button className="button3" variant="contained">Logout</Button>
        </Stack>
        

        {/* </Stack> */}
      </Box >
            </Grid>
            {/* <Grid md={7}>
            <Box className="form" >
     
        <h4 className="title">Your Balance is +100rs</h4>

      </Box >
            </Grid> */}
            <Grid md={8} xs={12}>
            <Box className="form">
        {/* <Stack spacing={2} > */}
        <h2 className="title">Transaction History</h2>
        <TextField
            id="username"
            variant="outlined"
            label="username"
            name="username"
            type="username"
            placeholder="Enter Username"
            // onChange={(e)=> {setLoginData({...loginData, [e.target.name]:e.target.value})}}
          />
        <DataTable></DataTable>
        {/* </Stack> */}
      </Box>
            </Grid>
        </Grid>
        );


}

export default Home;
