import React, { ReactNode, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.scss";
import { StopModel } from "./models";

import Header from "./components/Header";

import AddStop from "./pages/AddStop";
import Home from "./pages/Home";

const App = () => {
  const [stop, setStop] = useState<StopModel>({} as StopModel);
  const [stops, setStops] = useState<StopModel[]>([]);

  //add a stop
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
      setStop({
        location: "",
        name: "",
        length: 0,
        isFavorite: false,
        isOptional: false,
      } as StopModel);
    }
  };

  const onEdit = (e: React.FormEvent, id: number) => {};

  const onDelete = (e: React.FormEvent, id: number) => {
    setStops(stops.filter((stop) => stop.id !== id));
  };

  const onToggleIsOptional = (e: React.FormEvent, id: number) => {
    setStops(
      stops.map((stop) =>
        stop.id === id ? { ...stop, isOptional: !stop.isOptional } : stop
      )
    );
  };

  const onToggleIsFavorite = (e: React.FormEvent, id: number) => {
    setStops(
      stops.map((stop) =>
        stop.id === id ? { ...stop, isFavorite: !stop.isFavorite } : stop
      )
    );
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
            <Route
              path="/"
              element={
                <Home
                  stops={stops}
                  // onSubmit={onEditSubmit}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onToggleIsOptional={onToggleIsOptional}
                  onToggleIsFavorite={onToggleIsFavorite}
                  setStops={setStops}
                />
              }
            />
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
