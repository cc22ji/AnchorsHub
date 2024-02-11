
import { Schema, model } from 'mongoose';


const basic = new Schema({
    name : {type : String},
    mobile : {type : Number},
    profileImg : {type : String},
    LinkedinID : {type : String},
    GithubId : {type : String},
    // Resume : {type : File}

    
});

const Education = new Schema({
    type : {
        type:String,
        enum : ["School" , "College"],
    },
    name : {type : String},
   startDate : {type : Date} ,
   endDate : {type : Date} 
});

const project = new Schema({
    Projectname : {type : String},
    ProjectDes : {type : String},
    type : {
        type:String,
        enum : ["solo" , "group"],
    },
   endDate : {type : Date} ,
   link : {type : String},
});

const Experience = new Schema({
    type : {
        type:String,
        enum : ["intern" , "job"],
    },
    Companyname : {type : String},
    Companylink : {type : String},
    Role : {type : String},
    startDate : {type : Date} ,
    endDate : {type : Date} ,
//   coverletter : {type:File}
});

//assing one schema to other for proper managing data
const schema = new Schema({
    reference_id: { type: String },
    urls: {
        type: [basic,Education,project,Experience],
        bookmarksId : {type:Array}
    }

},{ timestamps: true }
)

const user =  model("users", schema) 
export default user;