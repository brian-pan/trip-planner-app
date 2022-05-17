import React, { ReactNode, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { StopModel } from "./models";

import Header from "./components/Header";

import AddStop from "./pages/AddStop";
import Home from "./pages/Home";

const App = () => {
  const [stop, setStop] = useState<StopModel>({} as StopModel);
  const [stops, setStops] = useState<StopModel[]>([]);

  const onAddStop = (e: React.FormEvent) => {
    e.preventDefault();

    if (stop) {
      setStops([
        ...stops,
        {
          id: Date.now(),
          location: stop.location,
          name: stop.name,
          length: stop.length,
          isFavorite: stop.isFavorite,
          isOptional: stop.isOptional,
        },
      ]);
      setStop({} as StopModel);
    }
  };

  console.log("====================================");
  console.log(stops);
  console.log("====================================");

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home stops={stops} />} />
            <Route
              path="/new"
              element={
                <AddStop onSubmit={onAddStop} stop={stop} setStop={setStop} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
