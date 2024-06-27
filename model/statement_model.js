import { Schema,model } from "mongoose";

// creating a statement model
const statementSchema = new Schema ({
    statementId: {type:String},
    incidentType: {enum:['criminal','non-criminal']
    },
    civilianStatus: {enum:['suspect', 'complainant','witness']
    },
    statement: {type:String},
    caseStatus: {enum:['open','closed','cold case']
    },
    civilianId: {type:String},
    createdAt: {type:Date, default:Date.now()},
    updatedAt: {type:Date, default:Date.now()}
});

export const statementModel = model('Statement',statementSchema);
