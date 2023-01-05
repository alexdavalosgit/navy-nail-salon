import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Infobar from "./components/Infobar";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Infobar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
