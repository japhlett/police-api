import express from "express";
import statementRouter from "./routes/statement.js";
import mongoUri from "./config/db.js";
import 'dotenv/config';
// creating a server
const police_app = express();


// telling the server to use the routes
police_app.use(statementRouter);



// listening on the police app

police_app.listen(3000, () =>{
    console.log('Police app is running on port 3000');
});
