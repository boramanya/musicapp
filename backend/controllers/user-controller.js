import UserModel from '../db/models/user-schema.js'; 
import { hashing } from '../utils/encrypt.js';
export const userController = {
    async login(request, response){
        const userInfo= request.body;
        console.log(userInfo);
        try{
        const doc=await UserModel.findOne({'email':userInfo.email}).exec();
        if(doc && doc._id){
            const plainPassword=userInfo.password;
            const dbPassword =doc.password;
            if(hashing.matchPassword(plainPassword,dbPassword)){
                response.json({message:"welcome "+doc.name+ " !"});
            }
            else{
                response.json({message:"Invalid userid or password :("});
            }
        }
        else{
            response.json({message:"invalid userid or password! :("});
        }
    }
    catch(err){
        console.log('Error in login',err);
        response.json({message:"something went wrong"});
    }},
    async register(request, response){
        const userInfo =request.body;
        userInfo.password=hashing.passwordHash(userInfo.password)
        try{
            const doc=await UserModel.create(userInfo);
            if(doc && doc._id){
                response.json({message:'Registered successfully !'});
            }
            else{
                response.json({message:'Problem in registration :('});
            }
        }
        catch(err){
            console.log("registration error",err);
            response.json({message:"problem in registration"});
        }
    },
    profile(request, response){
        const username= request.params.username;
        console.log("user name is",username);
        response.json({message:username+' Profile'});
    }
}
