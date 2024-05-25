import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TodoForm() {
  const [value, setValue] = useState();
  let handle_input = (e) => {
    setValue(e.target.value);
  };
  let handle_submit = (e) => {
    if (value) {
      axios
      .post("http://localhost:3000/api/todo", {
        todo: value,
      }).then(()=>{
          
          toast("One Task Added Successfully !", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setValue("")
        })

        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Input something ");
    }
  };

  return (
    <div className="">
            <ToastContainer
       position="top-right"
       autoClose={2000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
  
      />
    
      <h1 className="font-bold text-center my-6 text-3xl">
        What's the plan for today?
      </h1>
      <div className="w-[1040px] mx-auto flex">
        <input
          onChange={handle_input}
          value={value}
          className=" w-full bg-[#F1ECE6] h-[78px] text-2xl rounded-l-3xl px-5"
          type="text"
          placeholder="Add a task"
        />

        <button
          onClick={handle_submit}
          className="font-semibold text-[30px] text-white rounded-r-3xl  w-[140px] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          Add{" "}
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
