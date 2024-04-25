const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
  wasteId:{
    type:String,
    required:true,
    unique:true
  },
  date:{
    type:String,
    required:true
},
image:{
  type:String
  
}
})
const wastes = mongoose.model("wastes",wasteSchema)
module.exports = wastes