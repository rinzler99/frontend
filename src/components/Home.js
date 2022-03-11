import { useState } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import { Avatar, Button, Stack , Grid, InputAdornment,
  TextField } from "@mui/material";

import DataTable from './DataTable'



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
            <Grid md={4}/>
            <Grid md={4} xs={12}>
            <Box className="form" >
        {/* <Stack spacing={2} className="form"> */}
        <h3 className="title">Welcome, Pradeep!</h3>
        <h4 className="title">Your Balance is +100rs</h4>

        {/* </Stack> */}
      </Box >
            </Grid>
            <Grid md={12} xs={12}>
            <Box className="form">
        {/* <Stack spacing={2} > */}
        {/* <h2 className="title">Login success</h2> */}
        <DataTable></DataTable>
        {/* </Stack> */}
      </Box>
            </Grid>
        </Grid>
        );


}

export default Home;
