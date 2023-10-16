import React from "react";
import "../pages/Print.css";
import { Dropdown } from "semantic-ui-react";
export default function PrintEmployee({ employeeData, setAddress }) {
  console.log("hi", employeeData);
  const addressOpt = [
    {
      key: "Pune",
      text: "Pune",
      value: "Pune",
    },
    {
      key: "UP",
      text: "UP",
      value: "UP",
    },
    {
      key: "Bihar",
      text: "Bihar",
      value: "Bihar",
    },
  ];

  return (
    <>
      <Dropdown
        placeholder="Select City"
        selection
        options={addressOpt}
        onChange={(e, { name, value }) => {
          setAddress(value);
        }}
      />
      <div>
        <table className="hello">
          <tr className="hello">
            <th className="hello">Id</th>
            <th className="hello">Name</th>
            <th className="hello">Address</th>
          </tr>
          {employeeData.map((user) => (
            <tr className="hello">
              <td className="hello">{user.eid}</td>
              <td className="hello">{user.ename}</td>
              <td className="hello">{user.address}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
