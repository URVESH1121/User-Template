import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import Modal from "./Modal";

const Like = ({ val, deleteData, editData }) => {
  const [like, setLike] = useState(false);
  function likeHandler() {
    setLike(!like);
  }

  const [edit, setEdit] = useState(false);

  function editHandler() {
    setEdit(!edit);
  }
  return (
    <>
      <div className="  rounded-xl ">
        <div className=" bg-gray-200 rounded-t-xl">
          <img
            className="w-[100vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] h-[30vh]"
            src={`https://avatars.dicebear.com/v2/avataaars/${val.username}.svg?options[mood][]=happy`}
            // src={`assets/${val.id}.svg`}
            alt=""
          />
        </div>

        <hr className="border-black" />

        <div className=" border-black">
          <h1 className="text-xl font-extrabold px-3">{val.name} </h1>
          <div className="px-5">
            <h1 className="flex items-center ">
              <span className="text-red-800 mr-2">
                <FaRegEnvelope />
              </span>
              {val.email}
            </h1>
            <h1 className="flex items-center ">
              <span className="text-blue-500 mr-2">
                <FaPhone />
              </span>
              {val.phone}
            </h1>
            <h1 className="flex items-center ">
              <span className="text-violet-500 mr-2">
                <FaGlobe />
              </span>
              {val.website}
            </h1>
          </div>
        </div>
        <hr />

        <div className="flex justify-evenly items-center px-3 py-2 text-2xl rounded-b-xl bg-gray-200">
          <div onClick={likeHandler} className=" border-black  text-red-500">
            {like ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
          <div>|</div>
          <div onClick={editHandler} className=" border-black  text-blue-500">
            <FaEdit />
          </div>
          <div>|</div>
          <div onClick={() => deleteData(val.id)}>
            <MdDelete />
          </div>
        </div>
      </div>
      {edit ? (
        <Modal val={val} editHandler={editHandler} editData={editData} />
      ) : null}
    </>
  );
};

export default Like;
