import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const Modal = ({ val, editHandler, editData }) => {
  const [name, setName] = useState(val.name);
  const [email, setEmail] = useState(val.email);
  const [phone, setPhone] = useState(val.phone);
  const [website, setWebsite] = useState(val.website);

  function Name(e) {
    setName(e.target.value);
  }
  function Email(e) {
    setEmail(e.target.value);
  }
  function Phone(e) {
    setPhone(e.target.value);
  }
  function Website(e) {
    setWebsite(e.target.value);
  }

  function submitData() {
    const data = {
      id: val.id,
      name: name,
      email: email,
      phone: phone,
      website: website,
    };
    editData(data);
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/30">
        <div className="w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[30vw]  relative flex flex-col rounded-lg p-3 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between p-3">
            <p className="text-xl text-blue-500 font-bold">Basic Modal</p>
            <button onClick={editHandler}>
              <ImCross />
            </button>
          </div>
          <hr />
          <div className="px-5 py-3">
            <label
              htmlFor=""
              className="inline-block w-[100px] font-semibold text-right pr-2"
            >
              <span className="text-red-500">*</span> Name :
            </label>
            <input
              className="border-2 font-light text-lg p-2 w-64 border-gray-200 rounded hover:border-blue-500"
              type="text"
              value={name}
              onChange={Name}
            />
          </div>

          <div className="px-5 py-3">
            <label
              htmlFor=""
              className="inline-block w-[100px] font-semibold text-right pr-2"
            >
              <span className="text-red-500">*</span> Email :
            </label>
            <input
              className="border-2 font-light text-lg p-2 w-64 border-gray-200 rounded hover:border-blue-500"
              type="email"
              value={email}
              onChange={Email}
            />
          </div>

          <div className="px-5 py-3">
            <label
              htmlFor=""
              className="inline-block w-[100px] font-semibold text-right pr-2"
            >
              <span className="text-red-500">*</span> Phone No :
            </label>
            <input
              className="border-2 font-light text-lg p-2 w-64 border-gray-200 rounded hover:border-blue-500"
              type="text"
              value={phone}
              onChange={Phone}
            />
          </div>

          <div className="px-5 py-3">
            <label
              htmlFor=""
              className="inline-block w-[100px] font-semibold text-right pr-2"
            >
              <span className="text-red-500">*</span> Website :
            </label>
            <input
              className="border-2 font-light text-lg p-2 w-64 border-gray-200 rounded hover:border-blue-500"
              type="text"
              value={website}
              onChange={Website}
            />
          </div>
          <hr />
          <div className="flex gap-2 justify-center py-2">
            <button
              onClick={editHandler}
              className="border-2 font-semibold text-lg rounded-lg border-gray-500 flex px-3 py-1 hover:text-blue-500 hover:border-blue-500"
            >
              Cancel
            </button>
            <button
              onClick={submitData}
              className="rounded-lg font-semibold text-lg text-white flex px-3 py-1 bg-blue-500 hover:bg-blue-400"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
