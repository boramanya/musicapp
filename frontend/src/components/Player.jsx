//import {Box, Card, Typography,CardContent, CardMedia, IconButton, SkipPreviousIcon,PlayArrowIcon,SkipNextIcon} from '@mui/material';
import * as React from 'react';
//import { useTheme } from '@mui/material/styles';
import {Typography} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export const Player=({fn, song})=>{
    console.log('song object received ', song);
    //const theme = useTheme();
   
    return(
        <div>
          <center>
        <div class="card" id="play" style={{width: "20rem"}}>
            

            <img class='card-img-top' src={song.artworkUrl100} height={200} width={200} alt='img'/>
            <br/>
            
            <Typography fontFamily={'Helvetica'} fontSize={20} color={'#ffffff'} fontWeight={'bold'}>{song?.trackName} </Typography>
            
            <Typography color={'#ecebe8'} fontWeight={'light'} fontStyle={'italic'}>{song?.artistName}</Typography>
            
            </div>
        <br/>
        <br/>
        <audio controls>
                <source src={song?.previewUrl} type="audio/mp4"/>
            </audio>

                <br/>
                <br/>
                <button className="btn btn-success" onClick={()=>{
                fn(false, null);
            }}><ArrowBackIosNewIcon/></button>
            
            </center>
        
        </div>
    );
    
}
//#ecebe8
//<audio controls src="">
// style={{float: 'center'}}
//?. is used if initial value is null so conditional checking from ES latest vers



/* 

<p>
            <img src={song.artworkUrl100}/>
            <br/>
                {song?.trackName} by {song?.artistName}
            </p>
            <br/>
            <br/>
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
        </audio>

*/





/*

return(

        <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {song?.trackName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {song?.artistName}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={song.artworkUrl100}
      />
      
      
    </Card>
    

    );
}







*/
// style={{width:'200px',height:'200px'}}