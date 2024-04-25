const mongoose = require('mongoose')
const connectionString= process.env.DB_CONNECTION

mongoose.connect(connectionString).then(
    (res)=>{
        console.log("Server Application connected with Atlas Successfully");
    }
).catch(
    (err)=>{
     console.log(err);
})