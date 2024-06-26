import { Router } from "express";

// creating the statement route

const statementRouter =Router();

// defining the routes
statementRouter.get('/statement', (req,res)=>{
    res.json('Displays the inputed statement');
});
statementRouter.post('/statement', (req,res) =>{
    res.json('Accept statement from user');
});

// exporting the statementRouter
export default statementRouter;