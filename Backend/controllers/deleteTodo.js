const todoSchema = require("../model/todoSchema");

async function deleteTodo(req,res){
//    console.log(req.body.id)
    let alltodo=await todoSchema.findByIdAndDelete(req.body.id);
    res.send(alltodo)
 
 }
 module.exports=deleteTodo