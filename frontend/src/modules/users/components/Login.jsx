import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { apiClient } from '../../../services/api-client';
import { SearchPage } from '../../../pages/SearchPage';
//import { Register } from './Register';

export const Login = () => {
    const [flag, setFlag]=useState(false);
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    const doLogin = async ()=>{
        const userInfo = {
            'email': emailRef.current.value,
            'password':pwdRef.current.value
        }
        try{
        const response = await apiClient.post(process.env.REACT_APP_LOGIN, userInfo);
        setMessage(response.data.message);
        }
        catch(err){
            setMessage('login failed :(');
            console.log('Error Login ', err);
        }
    }
    const out=()=>{
      if (flag===true){
        return <SearchPage/>
}
    
    else{ return(
    <Container>
      <center>
      <h1>User Login</h1>
    <p>{message}</p>
    <br/>
  
    <TextField sx={{ input: { color: 'white' } }} inputRef = {emailRef} id="outlined-basic" placeholder="Email" variant="outlined" />
    <br/>
    <TextField sx={{ input: { color: 'white' } }} inputRef = {pwdRef} id="outlined-basic" placeholder="Password" variant="outlined" />
   <br/><br/>
   <Button type="submit" onClick={()=>{doLogin(); setFlag(true)}} variant="contained">Login</Button>
    </center>

    
    </Container>);
}
    }




  return (
    <div>
      <p>{message}</p>
      {out()}
      
    </div>
   

  )
}
