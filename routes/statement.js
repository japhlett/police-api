import { Router } from "express";
import { addStatement } from "../controllers/statement_controller.js";
// creating the statement route

export const statementRouter= Router();

statementRouter.post('/statement', addStatement)
// const statementRouter =Router();

// defining the routes
// statementRouter.get('/statement', (req,res)=>{
//     res.json('Displays the inputed statement');
// });
// statementRouter.post('/statement', (req,res) =>{
//     res.json('Accept statement from user');
// });

// // exporting the statementRouter
// export default statementRouter;