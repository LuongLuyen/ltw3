const mongoose =require("mongoose")

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    avt:{
        type:String,
        required:true
    },
},{timestamps:true}

)

module.exports= mongoose.model("User", Schema)