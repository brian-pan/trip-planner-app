import React, { useEffect, useRef, useState } from "react";
import { StopModel } from "../models";

interface Props {
  stop: StopModel;
  stops: StopModel[];
}

const Stop = ({ stop, stops }: Props) => {
  return (
    <form className="stop">
      <div className="stop-content">
        <div className="stop-content-location">
          <h3>{stop.location}</h3>
        </div>
        <div className="stop-content-name">
          <h3>{stop.name}</h3>
        </div>
        <div className="stop-content-length">
          <h3>
            <span>ETS: </span>
            {stop.length} mins
          </h3>
        </div>
      </div>
      <div className="stop-icons"></div>
    </form>
  );
};

export default Stop;
