import { Router } from "express";
import { addStatement, allStatements, updateStatement, getStatement, deleteStatement } from "../controllers/statement_controller.js";

// creating the statement route

export const statementRouter= Router();

statementRouter.post('/statement', addStatement)
statementRouter.get('/statement',allStatements)
statementRouter.patch('/statement/:id',updateStatement)
statementRouter.get('/statement/:id',getStatement)
statementRouter.delete('/statement/:id',deleteStatement)
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