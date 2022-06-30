import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
function App() {
  return (
    <div className="App">
      <Landing />
      <Skills />
      <Experience />
      <About />
    </div>
  );
}

export default App;
