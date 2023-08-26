import { useRef } from "react";
//import { IconButton, InputAdornment } from '@mui/material';
//import InputAdornment from '@mui/core/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
export const Search=({fn})=>{
    const artist=useRef();
    
    return (
        <>
        <h2 style={{fontFamily:"Helvetica", color:"#ffffff", fontWeight:'bolder'}}>Search</h2>
        
        <center>
            
        <div class="container" id='searchRow'>
        <input ref={artist} type='text' className="form-control me-2" placeholder="Artists, songs, or podcasts" />
      
        <button className="btn btn-success " onClick={()=>{
            fn(artist.current.value);
        }} endIcon={<SearchIcon/>}><SearchIcon/></button>
        
        </div>
        </center>
        </>
        
        );

        // style={{float: 'right'}}
}



/*

<div className="col-4">
        <input ref={artist} type='text' className="form-control" placeholder="search song or artist here"/>
        </div>
        <div className="col-4">
        <button className="btn btn-success " onClick={()=>{
            fn(artist.current.value);
        }}>search</button>
        </div>

*/
//<label  fontFamily="Helvetica" color="#ffffff"></label>

/*InputProps={{
    endAdornment: (
        <InputAdornment position="start">
          <SearchIcon/>

        </InputAdornment>
      )
}}*/