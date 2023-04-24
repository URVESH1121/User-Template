import React, { useState } from "react";
import Data from "./Data";
import Like from "./Like";

const Map = () => {
  const [userData, setUserData] = useState(Data);

  function deleteData(val) {
    const filter = userData.filter((item) => item.id !== val);
    setUserData(filter);
  }
  function editData(val) {
    const dataIndex = userData.findIndex((item) => item.id === val.id);

    const newData = [...userData];
    newData[dataIndex] = val;
    setUserData(newData);
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-3">
        {userData.map((val) => {
          // const name = "urvesh";
          return (
            <>
              <Like val={val} deleteData={deleteData} editData={editData} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Map;
