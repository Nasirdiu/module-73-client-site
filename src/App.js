import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SingUp from "./Pages/Login/SingUp/SingUp";
import Navbar from "./Pages/Share/Navbar/Navbar";
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
