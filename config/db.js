import mongoose from "mongoose";
import 'dotenv/config';



const mongoUri = process.env.Mongo_Url;


// connecting to our db

export const dbConnection = ()=>{
    mongoose.connect(mongoUri).then(() => {
        console.log('Database is connected');
    }) 
};


