import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Navbar from "./pages/Navbar";
import Array from "./tasks/Array";
import Radio from "./tasks/Radio";
import Tesing from "./redux/Tesing";
import Print from "./Component/Print";
import { useEffect, useState } from "react";
import Checkbox from "./Component/Checkbox";
import { getAllEmployee } from "./services/connection";
import PrintEmployee from "./tasks/PrintEmployee";
import Form from "./tasks/Form";
function App() {
  const [address, setAddress] = useState("");
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    getEmployeData(address);
  }, []);

  const getEmployeData = (city) => {
    getAllEmployee(city).then((data) => {
      setEmployeeData(data);
    });
  };
  return (
    <div>
      <BrowserRouter>
        {/* <Checkbox checked={checked} setChecked={setChecked} /> */}
        <Form />
        <PrintEmployee employeeData={employeeData} setAddress={setAddress} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route exact path="/arrayprint" element={<Array />}></Route>
          <Route path="/radio" element={<Radio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
