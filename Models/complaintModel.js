const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  subject:{
    type:String,
    required:true
    
  },
  complaint:{
    type:String,
    required:true
  },
  image:{
    type:String
    
  },
  userId:{
        type:String,
        required:true
    },
  complaintId:{
    type:String,
    required:true,
    unique:true
  },
  pendingStatus:{
    type:Boolean,
    default: false
  },
  approvedStatus:{
    type:String
  }
})
const complaints = mongoose.model("complaints",complaintSchema)
module.exports = complaints