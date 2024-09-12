import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 flex justify-center items-center relative overflow-hidden">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/registration">Registration</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/logout">Logout</Link>
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default App;
