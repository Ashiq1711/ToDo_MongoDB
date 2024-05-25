const todoSchema = require("../model/todoSchema")


function todoController(req,res){
    let {todo}=req.body
    let todoData=new todoSchema({
        todo,
    });
    try{
        todoData.save();

    } catch (error){
        console.log(error)
    }
 res.send(todoData)
}
module.exports=todoController