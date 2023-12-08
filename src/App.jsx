import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/portfolio/home" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/error404" element={<Error404 />} />
        <Route path="/portfolio/*" element={<Navigate to="/portfolio/home" />} />
        <Route path="*" element={<RouteNotFound status={404} />} />
      </Routes>
      <Footer />
    </>
  )
};

function RouteNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/portfolio/error404");
  }, []);
  return null;
}

export default App;
