import React, { useEffect, useState } from "react";
import Radio from "./Radio";
import "../pages/Print.css";
import Dropdown from "./Dropdown";
import Filter from "./Filter";
export default function Print({ studentList, setStudentList }) {
  const [copyStudentList, setcopyStudentList] = useState(studentList);
  const [radioValue, setradioValue] = useState("null");
  const [radioTrue, setRadioTrue] = useState(false);
  const [dropdown, setdropDown] = useState(false);
  const [dropdownCityValue, setdropdownCityValue] = useState("reset");
  const [dropdownStateValue, setdropdownStateValue] = useState("reset");

  const handleRadio = () => {
    setRadioTrue(!radioTrue);
  };

  const handleDropdown = () => {
    setdropDown(!dropdown);
  };

  return (
    <div>
      <table className="hello ">
        <tr className="hello">
          <th className="hello">Student</th>
          <th className="hello">Age</th>
          <th className="hello">City</th>
          <th className="hello">State</th>
          <th className="hello">School</th>
          <th className="hello">Gender</th>
        </tr>
        {copyStudentList.map((val, index) => {
          return (
            <tr key={val.id}>
              <td className="hello">{val.name}</td>
              <td className="hello">{val.age}</td>
              <td className="hello">{val.city}</td>
              <td className="hello">{val.state}</td>
              <td className="hello">{val.school}</td>
              <td className="hello">{val.gender}</td>
            </tr>
          );
        })}
        <th>
          Action:{" "}
          <div className="d-flex gap-3">
            {!radioTrue && radioValue === "null" ? (
              <button onClick={handleRadio}>Radio</button>
            ) : (
              <>
                <Radio
                  radioValue={radioValue}
                  setradioValue={setradioValue}
                  setRadioTrue={setRadioTrue}
                />
              </>
            )}
            {!dropdown ? (
              <button onClick={handleDropdown}>DropDown</button>
            ) : (
              <Dropdown
                copyStudentList={studentList}
                setdropdownCityValue={setdropdownCityValue}
                setdropdownStateValue={setdropdownStateValue}
              />
            )}
          </div>
          <Filter
            studentList={studentList}
            radioValue={radioValue}
            dropdownCityValue={dropdownCityValue}
            dropdownStateValue={dropdownStateValue}
            setcopyStudentList={setcopyStudentList}
          />
        </th>
      </table>
    </div>
  );
}
