const todoSchema = require("../model/todoSchema")

async function updateTodo(req,res){
    let {todo,id}=req.body
    let updateTodo=await todoSchema.findByIdAndUpdate(id,{todo:todo},{new:true})
console.log(updateTodo)
}
module.exports=updateTodo