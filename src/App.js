import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/navbar";
import Landing from "./components/Landing/landing";
import Services from "./components/Services/services";
import AboutUs from "./components/AboutUs/about";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
