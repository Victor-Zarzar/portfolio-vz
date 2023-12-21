import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Location from "./pages/Location";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
  }`;

const App = () => {

  const [theme, setTheme] = useState("light");

  const light = {
      body: "#E2E2E2"
  };
  const dark = {
      body: "#111827"
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? dark : light}>
            <GlobalStyle />
            <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="*" element={<RouteNotFound status={404} />} />
      </Routes>
      <Skills />
      <Location />
      <Footer />
      </ThemeProvider>
    </>
  )
};

function RouteNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error404");
  }, [navigate]);
  return null;
}

export default App;
