import { statementModel } from "../model/statement_model.js";

// function to store data in the database
export const addStatement = async (req,res) =>{
    // this function lets us know whether the process was a success or not and if it wasn't the kind of error encountered
    try {
        console.log('request', req.body)
        const addData = await statementModel.create(req.body);
        console.log(addData);
        res.send('statement added');

    } catch (error) {
        console.log(error);
    }
    
};