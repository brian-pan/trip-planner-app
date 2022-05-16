import React from "react";
import Stop from "../components/Stop";
import { StopModel } from "../models";

interface Props {
  stops: StopModel[];
}

const TripList = ({ stops }: Props) => {
  return (
    <div className="stops-list">
      {stops.map((stop) => (
        <Stop stop={stop} key={stop.id} />
      ))}
    </div>
  );
};
export default TripList;
