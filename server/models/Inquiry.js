import {Schema,model} from "mongoose"

const inquirySchema=new Schema({
    name:{
        type:String,
        required:true
    },

    email:{
    type:String,
    required:true,
    unique:true
},

phoneNumber:{
    type:Number,
    required:true
},

message:{
    type:String,
    required:true,

},

flat:{
    type:String,
    required:true,
    objectId:String,
},

status:{
    type:String,
    required:true,
    enum:["new","in Progress","resolved"]
},
},{
    timestamp:true
});

const Inquiry =model("Inquiry",{inquirySchema});
export default Inquiry;