const mongoose = require('mongoose');
function dbConnect(){
    mongoose.connect(
        "mongodb+srv://crud:crud@cluster0.8ytmuh1.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
      ).then(()=>{
        console.log("database connected")
      }).catch((err)=>{
        console.log(err)
      })
}
module.exports=dbConnect