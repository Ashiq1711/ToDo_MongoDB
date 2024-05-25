import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateModal from "./UpdateModal";
const TodoList = ({}) => {
  let [alltodo, setAllto] = useState([]);
  let [check, setCheck] = useState(false);
  useEffect(() => {
    async function getdata() {
      let data = await axios.get("http://localhost:3000/api/alltodo");
      setAllto(data.data);
    }

    getdata();
  }, [alltodo]);

  let handle_check = (e) => {
    setCheck(!check);
  };

  let handle_delete = (id) => {
    axios
      .delete("http://localhost:3000/api/delete", {
        data: { id },
      })
      .then(() => {
        toast("One Task Deleted Successfully !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className: " bg-red-500",
        });
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [showModal, setShowModal] = useState(false);
  const [updateId, setUpdateId] = useState();

  let handle_update = (id) => {
    setShowModal(true);
    setUpdateId(id);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
      {alltodo.map((item) => (
        <div className=" my-5 flex justify-between items-center  mx-auto w-[940px] h-[88px]  border-b-2 border-indigo-500 ">
          <div
            onClick={handle_check}
            className=" flex justify-center items-center gap-3"
          >
            {check ? (
              <IoIosCheckmarkCircle className="text-3xl text-green-600" />
            ) : (
              <FaRegCircle className="text-3xl" />
            )}
            <h1 className="text-2xl font-semibold">{item.todo}</h1>
          </div>
          <div className=" flex justify-center items-center gap-5">
            <RiEdit2Fill
              onClick={() => handle_update(item._id)}
              className="text-3xl cursor-pointer hover:text-green-600"
            />
            {showModal && (
              <UpdateModal id={updateId} onClose={() => setShowModal(false)} />
            )}
            <MdDelete
              onClick={() => handle_delete(item._id)}
              className="text-3xl cursor-pointer hover:text-red-600"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
