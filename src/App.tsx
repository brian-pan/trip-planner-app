import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import AddPlace from "./pages/AddPlace";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<AddPlace />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
