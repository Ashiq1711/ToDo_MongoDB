import axios from "axios";
import React, { useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
function UpdateModal({ onClose,id, }) {
  // console.log(id)
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  const [updateData, setUpdateData] = useState();
  let handle_input_update = (e) => {
    setUpdateData(e.target.value);
  };
  let update_todo = (e) => {
    axios
      .put("http://localhost:3000/api/updatetodo", {
        todo: updateData,
        id:id
      })
      .then((data) => {
        onClose(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className="flex relative">
        <IoMdCloseCircle
          onClick={onClose}
          className="text-[39px] absolute top-0 right-0 cursor-pointer text-red-500 "
        />
        <div className="flex flex-col bg-indigo-600 rounded-xl px-28 py-16">
          <h1 className=" text-center font-semibold text-2xl text-white">
            Update your task{" "}
          </h1>
          <input
            onChange={handle_input_update}
            className=" w-[330px] mt-5 py-2 px-5 rounded-sm"
            type="text"
            placeholder="update value"
          />
          <button
            onClick={update_todo}
           
            type="button"
            class="text-green-600 text-xl font-semibold bg-gray-800   py-3 rounded-lg mt-3 "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
