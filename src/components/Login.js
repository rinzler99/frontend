import { useState } from "react";
import "./login.css";
import Box from "@mui/material/Box";
import { Avatar, Button, Stack , InputAdornment,
  TextField } from "@mui/material";



const Login = ({setLogin}) => {
    const [loginData, setLoginData] = useState({
        username:'',
        password:''
      });

      function checkCred(){
          if(loginData.username === 'pradeep' && loginData.password === 'pradeep'){
              setLogin(true);
          }
      }

    return (
        <Box className="content">
        <Stack spacing={2} className="form">
        <h2 className="title">Login</h2>
        <TextField
            id="username"
            variant="outlined"
            label="username"
            name="username"
            type="username"
            fullWidth
            placeholder="Enter Username"
            onChange={(e)=> {setLoginData({...loginData, [e.target.name]:e.target.value})}}
          />
          <TextField
            id="password"
            variant="outlined"
            label="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            fullWidth
            onChange={(e)=> setLoginData({...loginData, [e.target.name]:e.target.value})}
          />
           {/* {loading ? <CircularProgress />:<Button className="button" variant="contained" onClick={register}>Register Now</Button>} */}
           <Button className="button" variant="contained" onClick={()=>{checkCred()}}>Login to Khatabook</Button>
        </Stack>
      </Box>);


}

export default Login;
