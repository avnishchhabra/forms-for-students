import axios from "axios";
import React, { useState } from "react";
import "./add.css";

const AddEmployee = ({ employees, setEmployees }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleAddEmployee = () => {
    if (name.length === 0 || email.length === 0) {
      return setNameError("Enter Valid Data");
    }
    const employee = {
      name,
      email,
    };
    setEmployees([...employees, employee]);
    setName("");
    setEmail("");
    // send employees list to backend
    // fetch("https://mockapi.io/projects/623c802d8e9af58789520cdb/employees", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(employee),
    // });
    axios.post(
      "https://mockapi.io/projects/623c802d8e9af58789520cdb/employees",
      employee
    );
  };
  return (
    <div className="my-form">
      <h1 className="add-heading">Add Employee</h1>
      <div className="input-field">
        <label>Employee Name: </label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter Name"
        />
        {nameError.length > 0 && <p className="error">{nameError}</p>}
      </div>
      <div className="input-field">
        <label>Employee Email: </label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter Email"
        />
        {emailError.length > 0 && <p className="error">{emailError}</p>}
      </div>
      <button onClick={handleAddEmployee} className="add-btn">
        ADD
      </button>
    </div>
  );
};

export default AddEmployee;
