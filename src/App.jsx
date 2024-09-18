import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DSA from "./pages/DSA";
import Contests from "./pages/Contests";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/contests" element={<Contests />} />
      </Routes>
    </Router>
  );
}

export default App;
