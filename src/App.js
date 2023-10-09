import React from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<Project />} />
        <Route path="/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
