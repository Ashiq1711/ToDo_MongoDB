const express=require("express");
const todoController = require("../../controllers/todoController");
const todoAllData = require("../../controllers/getAlldata");
const deleteTodo = require("../../controllers/deleteTodo");
const updateTodo = require("../../controllers/updateTodo");
const  router= express.Router();

router.post('/todo', todoController )
router.get('/alltodo', todoAllData  )
router.delete('/delete', deleteTodo  )
router.put('/updatetodo', updateTodo   )
module.exports=router;