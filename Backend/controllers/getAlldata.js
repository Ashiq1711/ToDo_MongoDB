const todoSchema = require("../model/todoSchema");

async function todoAllData(req,res){
   let alltodo=await todoSchema.find({});
   res.send(alltodo)

}
module.exports=todoAllData