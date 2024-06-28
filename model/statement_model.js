import { Schema,model } from "mongoose";

// creating a statement model
const statementSchema = new Schema ({
    incidentType: {type:String,
        enum:['criminal','non-criminal']
    },
    civilianStatus: {type:String,
        enum:['suspect', 'complainant','witness']
    },
    statement: {type:String},
    caseStatus: {type:String,
        enum:['open','closed','pending']
    }
   
},{
    timestamps:true
});

export const statementModel = model('Statement',statementSchema);
