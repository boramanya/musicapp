import express from 'express';
import {userRoutes} from './routes/user-routes.js';
import cors from 'cors';
const app = express();
app.use(cors()); //middleware

app.use(express.json());//fetch json
app.use('/',userRoutes);
//last middleware 404
app.use((request, response, next)=>{
    response.json({message:'Invalid URL'});
});
const server = app.listen(1234,(err)=>{
    if(err){
        console.log('server crashed ', err);
    }
    else{
        console.log('server up and running !', server.address().port);
    }
});

