import { Song } from "./Song";

export const Songs=({fn,allsongs})=>{
    console.log('**************all the songs',allsongs);
    return (
        <>
        <br/>
        <br/>
      
        <h2 style={{fontFamily:"Helvetica", color:"#ffffff"}}>Start listening</h2>
        {allsongs.map((currentSong, index)=><Song fn={fn} key={index} song={currentSong}/>)}
        </>
    );
}
//all songs data to jsx and map is used for that 
//color: "red", 