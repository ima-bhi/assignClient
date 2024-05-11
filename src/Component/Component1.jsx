import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Component1 = () => {
  const [data, setData] = useState("");
  const [show, setShow] = useState("");
  const [editMode, setEditMode] = useState(false);

  // Function to handle adding data
  async function handleAdd() {
    setEditMode(true);
    // If data is empty, show message and return
    if (data === "") {
      return message.success("Enter new data in component");
    }
    try {
      // Make POST request to add data
      const res = await axios.post(
        "https://server-data-sigma.vercel.app/component/addData",
        {
          componentId: 1,
          data: data,
        }
      );
      message.success(res.data.msg);
      // Update displayed data and clear input
      setShow(res.data.component.data);
      setData("");
      setEditMode(false);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }
  // Function to handle updating data
  async function handleUpdate() {
    try {
      const res = await axios.put(
        "https://server-data-sigma.vercel.app/component/updateData",
        {
          componentId: 1,
          data: data,
        }
      );
      message.success(res.msg);
      setShow(res.data.Comp2.data);
      setEditMode(false);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }
  const handleEdit = () => {
    setData(show);
    setEditMode(true);
  };
  // JSX structure of Component1
  return (
    <>
      <div className="component">
        <h1>Window 1</h1>
        <div className="input-container">
          {editMode ? (
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          ) : (
            <h3>{show}</h3>
          )}
          <div className="button-container">
            {editMode ? (
              <button onClick={handleUpdate}>Update</button>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}
            <button onClick={handleAdd}>Add Data</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;