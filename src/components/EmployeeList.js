import React from "react";
import "./list.css";

const EmployeeList = ({ employees }) => {
  console.log("employeese list", employees);
  return (
    <div className="list-container">
      <h1 className="list-heading">Employee List</h1>
      {/* <table>
      <thead>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {employees.map((emp) => {
            <td>{emp.name}</td>;
          })}
        </tbody>
      </table> */}
      {employees.map((emp) => (
        <div className="employee">
          <p>{emp.name}</p>
          <p style={{ marginLeft: "50px" }}>{emp.email}</p>
          <button className="btn delete-btn">DELETE</button>
          <button className="btn edit-btn">EDIT</button>
        </div>
      ))}
      {/* <div className="employee">
        <p>Avnish</p>
        <button className="btn delete-btn">DELETE</button>
        <button className="btn edit-btn">EDIT</button>
      </div>
      <div className="employee">
        <p>Karan</p>
        <button className="btn delete-btn">DELETE</button>
        <button className="btn edit-btn">EDIT</button>
      </div>
      <div className="employee">
        <p>Sahil</p>
        <button className="btn delete-btn">DELETE</button>
        <button className="btn edit-btn">EDIT</button>
      </div> */}
    </div>
  );
};

export default EmployeeList;
