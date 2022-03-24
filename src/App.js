import { useEffect, useState } from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import axios from "axios";

function App() {
  // fetch employees list from backend server
  // object below
  const myObj = {
    name: "avnish",
    email: "avnish@gmail.com",
  };
  // json below
  const myJson = {
    name: "avnish",
    email: "avnish@gmail.com",
  };
  // fetch("https://623c802d8e9af58789520cda.mockapi.io/employees")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((myData) => {
  //     console.log("my data", myData);
  //   });
  useEffect(() => {
    axios
      .get("https://623c802d8e9af58789520cda.mockapi.io/employees")
      .then((data) => {
        console.log("axios success", data.data);
        setEmployees(data.data);
      });
  }, []);

  const [employees, setEmployees] = useState([]);
  console.log("employees", employees);
  return (
    <div className="App">
      <AddEmployee employees={employees} setEmployees={setEmployees} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
