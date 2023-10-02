import React, { useEffect } from "react";

export default function Filter({
  studentList,
  radioValue,
  dropdownCityValue,
  dropdownStateValue,
  setcopyStudentList,
}) {
  console.log(dropdownCityValue, dropdownStateValue);
  useEffect(() => {
    if (radioValue === "null") {
      setcopyStudentList(studentList);
    }
    if (dropdownCityValue === "reset" && dropdownStateValue === "reset") {
      setcopyStudentList(studentList);
    }
    if (
      radioValue !== "null" &&
      dropdownCityValue !== "reset" &&
      dropdownStateValue !== "reset"
    ) {
      const result = studentList.filter(filterF);
      function filterF(cityState) {
        return (
          cityState.state === dropdownStateValue &&
          cityState.city === dropdownCityValue &&
          cityState.gender === radioValue
        );
      }
      setcopyStudentList(result);
    } else if (radioValue !== "null" && dropdownCityValue !== "reset") {
      const result = studentList.filter(filterF);
      function filterF(cityState) {
        return (
          cityState.city === dropdownCityValue &&
          cityState.gender === radioValue
        );
      }
      setcopyStudentList(result);
    } else if (radioValue !== "null" && dropdownStateValue !== "reset") {
      const result = studentList.filter(filterF);
      function filterF(cityState) {
        return (
          cityState.state === dropdownStateValue &&
          cityState.gender === radioValue
        );
      }
      setcopyStudentList(result);
    } else if (radioValue !== "null") {
      const result = studentList.filter(filterF);
      function filterF(cityState) {
        return cityState.gender === radioValue;
      }
      setcopyStudentList(result);
    } else if (
      dropdownCityValue !== "reset" &&
      dropdownStateValue !== "reset"
    ) {
      const result = studentList.filter(filterF);
      function filterF(cityState) {
        return (
          cityState.state === dropdownStateValue &&
          cityState.city === dropdownCityValue
        );
      }
      setcopyStudentList(result);
    } else if (dropdownCityValue !== "reset") {
      const result = studentList.filter(filterF);
      function filterF(cityState) {
        return cityState.city === dropdownCityValue;
      }
      setcopyStudentList(result);
    } else if (dropdownStateValue !== "reset") {
      const result = studentList.filter(filterF);
      function filterF(cityState) {
        return cityState.state === dropdownStateValue;
      }
      setcopyStudentList(result);
    }
  }, [radioValue, dropdownCityValue, dropdownStateValue]);

  return <div></div>;
}
