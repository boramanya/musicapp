import { Player } from "../components/Player";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import {useEffect, useState} from 'react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
export const SearchPage=()=>{

    const [allSongs, setSongs]=useState([]);

    const [flag, setFlag]=useState(false);
    const [song, setPlayerSong]=useState(null);
    //component life cycle 
    const loadSongs=async()=>{
        setSongs(await getSongs('Latest Songs'));
    }
    useEffect(()=>{
        loadSongs();
    },[])
    //[] is used above to use it in component mount state,,,
    // []+fn => componentUnmount
    //no [], componentUpdate

    const togglePlayer=(flag, songarg)=>{
        console.log('flag:',flag,' and song object:',songarg);
        setFlag(flag);
        setPlayerSong(songarg);
    }


    const getArtistName=async (artistName)=>{
        console.log('artist name received!!!:', artistName);
        setSongs(await getSongs(artistName));
    }

    const jsx=<> <Search fn={getArtistName}/>
    <Songs fn={togglePlayer} allsongs={allSongs}/> </>
    return (
        <div className="container" style={{backgroundColor:'#000000'}}>
            <h1 className="alert alert-success text-center" ><HeadphonesIcon sx={{color:'#1db954', fontSize: 40}} />JukeBops</h1>
            
            {flag?<Player fn={togglePlayer} song={song}/>:jsx}
            
            
        </div>);
}

//<Songs fn={togglePlayer} allsongs={allSongs}/>   #1e211f