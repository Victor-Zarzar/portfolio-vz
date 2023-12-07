import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./components/Home";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/portal/*" element={<Navigate to="/home" />} />
        <Route path="*" element={<RouteNotFound status={404} />} />
      </Routes>
      <Footer />
    </>
  )
};

function RouteNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error404");
  }, []);
  return null;
}

export default App;
