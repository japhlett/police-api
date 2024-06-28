import { statementModel } from "../model/statement_model.js";

// function to store data in the database
export const addStatement = async (req,res) =>{
    // this function lets us know whether the process was a success or not and if it wasn't the kind of error encountered
    try {
        console.log('request', req.body)
        const addData = await statementModel.create(req.body);
        res.status(200).send(addData);

    } catch (error) {
        console.log(error);
    }
    
};


// function to get all data in the database
export const allStatements = async (req,res) =>{
    try {
        console.log('request',req.body)
        const getStatements = await statementModel.find();
        res.status(200).send(getStatements);
    } catch (error) {
        console.log(error);
    }
}

// function to update a statement by an id 
export const updateStatement = async (req,res) =>{
    try {
       const status = req.body.caseStatus
       console.log('request',status) 
       const patchStatement = await statementModel.findByIdAndUpdate(req.params.id,{caseStatus:status});
       res.status(200).send(patchStatement);
    } catch (error) {
        console.log(error)
        
    }
}

// function to get a statement by an id
export const getStatement = async (req,res,next) =>{
try {
    const statement = await statementModel.findById(req.params.id);
    res.status(200).send(statement);
} catch (error) {
    next(error);
    
}
}

// function to delete a statement by an id
export const deleteStatement = async (req,res,next) =>{
    try {
       const deletedStatement = await statementModel.findByIdAndDelete(req.params.id);
       res.status(200).send(deletedStatement);
    } catch (error) {
        next(error);
    }
}