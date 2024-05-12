const mongoose =require("mongoose")

const Schema = new mongoose.Schema({
    film:{
        type:String,
        required:true
    },
   
},{timestamps:true}

)

module.exports= mongoose.model("Film", Schema)