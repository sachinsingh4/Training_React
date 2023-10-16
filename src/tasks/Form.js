import React, { useState } from "react";
import axios from "axios";
export default function Form() {
  const [value, setvalue] = useState({
    ename: "",
    address: "",
  });
  const handleInput = (event) => {
    setvalue((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    //axios use to connect frontend with backend and passing also value(it contains data of form) to backend.
    axios
      .post("http://localhost:5000/api/employee/putdata", value)
      .then((res) => {
        if (res.data === "Error") {
          alert("Already Same data is present in the table");
        } else {
          alert("Data inserted successfully");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex container">
      <div className="bg-white p-3 rounded">
        <h1>
          <center>Data Insert</center>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeName">Employee Name</label>
            <input
              type="text"
              placeholder="Enter Employee Name"
              className="form-control rounded-0"
              name="ename"
              onChange={handleInput}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="employeeCity">Employee City</label>
            <input
              type="text"
              placeholder="Enter Employee City"
              className="form-control rounded-0"
              name="address"
              onChange={handleInput}
            ></input>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Insert Data
          </button>
        </form>
      </div>
    </div>
  );
}
