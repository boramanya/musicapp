import axios from 'axios';

export const apiClient={
    get(){

    },
    async post(URL, data){
        try{
        const response = await axios.post(URL, data);
        return response;
        }
        catch(err){
            throw err;
        }
    },
    put(){

    },
    remove(){

    }
}

export async function getSongs(termName){
    const URL=`https://itunes.apple.com/search?term=${termName}&limit=25`;
    const response= await axios.get(URL);
    console.log(response.data['results']);
    return response.data['results'];

}


