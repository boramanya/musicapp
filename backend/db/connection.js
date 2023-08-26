const URL="mongodb+srv://admin:helloworld@cluster0.qiq3h8c.mongodb.net/userdb?retryWrites=true&w=majority";
import mongoose from "mongoose";
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('DB connected');
}).catch(err=>{
    console.log('error during db connection',err);
})
export default mongoose;
