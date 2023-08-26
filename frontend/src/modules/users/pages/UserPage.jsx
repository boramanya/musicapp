import HeadphonesIcon from '@mui/icons-material/Headphones';
//import { Register } from '../components/Register'
import { Button, Typography } from '@mui/material'
import { Login } from '../components/Login'
import { Register } from '../components/Register';
import { useState } from 'react';
import { SearchPage } from '../../../pages/SearchPage';

export const UserPage = () => {
  const [flag, setFlag]=useState(null);
  const [check, setCheck]=useState(false);
   
const out=()=>{
  if (flag==null){
    
    return (
      <center>
      <div>
      <Button class='btn btn-success btn-lg me-4' onClick={()=>{ setFlag(true)}} > sign in </Button>
      <Button class='btn btn-success btn-lg ' onClick={()=>{setFlag(false)}}>sign up</Button>
   
    </div> </center>)
    
  }
  
  else if (flag===true ){
    if (check===true){
      return <SearchPage/>
    }
    else{
    return (
      <div>
        <center>
      <Button class='btn btn-success btn-lg me-4' onClick={()=>{ setFlag(true)}} > sign in </Button>
      <Button class='btn btn-success btn-lg ' onClick={()=>{setFlag(false)}}>sign up</Button>

    
    </center>
    <Login />
    </div>);
    
  }
}
  else if (flag==false){
    return (
      <center>
      <div>
      <Button class='btn btn-success btn-lg me-4' onClick={()=>{ setFlag(true)}} > sign in </Button>
      <Button class='btn btn-success btn-lg ' onClick={()=>{setFlag(false)}}>sign up</Button>
      <Register/>
    </div>;
    </center>)
    
    
    
  }
}
  return (
    <>
    <center>
      
    <Typography color='white' align='center' fontSize={40}><HeadphonesIcon sx={{color:'#1db954', fontSize: 40}}/>JukeBops</Typography></center>
    <br/>
    <br/>
    <div >
      
      
      <br/>
      {out()}
    </div>
    
   
    </>
  )
}
