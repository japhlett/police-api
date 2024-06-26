import mongoose from "mongoose";
import 'dotenv/config';



const mongoUri = process.env.Mongo_Url;


mongoose.connect(mongoUri).then(() => {
    console.log('Database is connected');
});




export default mongoUri;