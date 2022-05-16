import React, { ReactNode, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { StopModel } from "./models";

import Header from "./components/Header";

import AddPlace from "./pages/AddPlace";
import Home from "./pages/Home";

const App = () => {
  const [stop, setStop] = useState<StopModel>();
  const [stops, setStops] = useState<StopModel[]>([]);

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home stops={stops} />} />
            <Route path="/new" element={<AddPlace />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
