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
import { useSelector, useDispatch } from "react-redux";
import { fetchUserInfo } from "./redux/UserSlice";
import { increment } from "./redux/CounterSlice";
function App() {
  const value = useSelector((state) => state.counter.value);
  console.log("value", value);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  useEffect(() => {
    dispatch(fetchUserInfo(address));
  }, [address]);

  // const getEmployeData = (city) => {
  //   getAllEmployee(city).then((data) => {
  //     setEmployeeData(data);
  //   });
  // };
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+++</button>
      <BrowserRouter>
        {/* <Checkbox checked={checked} setChecked={setChecked} /> */}
        <Form />
        <PrintEmployee setAddress={setAddress} />
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
