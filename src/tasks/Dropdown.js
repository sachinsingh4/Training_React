function DropDown({
  copyStudentList,
  setdropdownCityValue,
  setdropdownStateValue,
}) {
  const city = [...new Set(copyStudentList.map((item) => item.city))];
  const State = [...new Set(copyStudentList.map((item) => item.state))];

  return (
    <>
      <label for="drop">Choose city and State:</label>
      <select name="drop" value="drop">
        <optgroup
          label="City"
          onClick={(e) => {
            setdropdownCityValue(e.target.value);
          }}
        >
          {city.map((cityname) => (
            <option value={cityname}>{cityname}</option>
          ))}
        </optgroup>
        <optgroup
          label="State"
          onClick={(e) => {
            setdropdownStateValue(e.target.value);
            setdropdownCityValue("reset");
          }}
        >
          {State.map((statename) => (
            <option value={statename}>{statename}</option>
          ))}
        </optgroup>
        <option
          value="reset"
          label="reset"
          onClick={(e) => {
            setdropdownCityValue(e.target.value);
            setdropdownStateValue(e.target.value);
          }}
        >
          Reset
        </option>
      </select>
    </>
  );
}

export default DropDown;
