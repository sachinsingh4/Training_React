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
import { useState } from "react";
import Checkbox from "./Component/Checkbox";
function App() {
  const [checked, setChecked] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Checkbox checked={checked} setChecked={setChecked} />
        <Print checked={checked} />
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

{
  /* {c.age > 10 && c.isHappy ? "Good" : "bad"}
      Hello World
      {3 + 5}
      {/* {c.forEach((name) => {
        <h1>{name}</h1>;
      })}
      <Classcomponent /> */
  {
    /* <Checkbox checked={checked} setChecked={setChecked} />
      <Print checked={checked} /> */
  }
}

// const a = 5;
// console.log(a);
// const c = { name: "sachin", age: 20, isHappy: true };
