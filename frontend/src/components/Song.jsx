//import { useState } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
//, IconButton, useTheme from below
import {Box, Card, Typography,CardContent, CardMedia, IconButton, Button} from '@mui/material';
//import {SkipPreviousIcon,PlayArrowIcon,SkipNextIcon} from '@mui/icons-material';
import * as React from 'react';
export const Song=({fn, song})=>{
    //const [playerFlag, setPlayerPlayer]=useState(false);
    const showPlayer=()=>{
        fn(true, song);
        //setPlayerPlayer(!playerFlag);
    }
    //const theme = useTheme();
    /*
    return (
    
        <div className="row" >
            <div class="card" >
            <div className="col-4">

                <img src={song.artworkUrl100}/>
                <br/>
                <br/>
            </div>

            <div className="col-4">
                {song.trackName} 
                <br/>
                {song.artistName}
            </div>
            
            <div className="col-4">
                <button onClick={showPlayer} className="btn btn-primary" >play</button>
            </div>
            </div>

        </div>
    );
    */
   return(
    <Card sx={{ display: 'flex ', bgcolor:'#383d39', m: 2}}>
        <CardMedia
      component="img"
      sx={{ width: 120 }}
      image={song.artworkUrl100}
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" color='#ffffff'>{song?.trackName}</Typography>

        <Typography variant="subtitle2" color="#ecebe8" component="div">{song?.artistName}</Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
      <IconButton onClick={showPlayer} className="btn btn-success" color='#1db954'><PlayCircleFilledIcon sx={{color:'#1db954', fontSize: 40}}/></IconButton>
    
      
      </Box>
    </Box>
    
    
    <br/>
    <br/>
  </Card>
  
   );
}
//{song.song.artistName} if song prop not destructured