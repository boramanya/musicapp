import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../services/api-client';
export const Register = () => {
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const doRegister = async ()=>{
        const userInfo = {
            'email': emailRef.current.value,
            'password': pwdRef.current.value,
            'name': nameRef.current.value,
            'phone': phoneRef.current.value,
        }
        try{
            const response = await apiClient.post(process.env.REACT_APP_REGISTER, userInfo);
            setMessage(response.data.message);
            console.log('Response is ', response);
            console.log('UserInfo ', userInfo);
        }
        catch(err){
            setMessage('registration failed...:(');
            console.log('oops, error:', err);
        }
    }
  return (
   <Container>
    <center>
    <h1>User Registration</h1>
    <p>{message}</p>
    
    <TextField width='50px' sx={{ input: { color: 'white' } }} inputRef = {nameRef} id="outlined-basic" placeholder="Name" variant="outlined" />
    <br/>
    <TextField  sx={{ input: { color: 'white' } }} inputRef = {emailRef} id="outlined-basic" placeholder="Email" variant="outlined" />
    <br/>
    <TextField sx={{ input: { color: 'white' } }} inputRef = {pwdRef} id="outlined-basic" placeholder="Password" variant="outlined" />
    <br/>
    
    <TextField sx={{ input: { color: 'white' } }} inputRef = {phoneRef} id="outlined-basic" placeholder="Phone" variant="outlined" />
    <br/> <br/> 
    <Button onClick={doRegister} variant="contained">Register</Button>
    </center>
   </Container>
  )
}
