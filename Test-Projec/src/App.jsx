
import React from 'react'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'

function App() {
  return (
    <div className='  '>
      <div className='flex justify-center items-center h-[100px]   bg-[#F1ECE6]'>
        <img className='w-[230px] h-[60px]' src="public/To-Do-Logo .png" alt="" />
      </div>
  
      <TodoForm/>
      <div className=' mt-7 overflow-auto rounded-3xl w-[1040px] mx-auto h-[600px] bg-[#F1ECE6]'>

      <TodoList/>
</div>
    </div>
  )
}

export default App