import React from "react";
import { Link } from "react-router-dom";
import { StopModel } from "../models";
import TripList from "../components/TripList";

interface Props {
  stops: StopModel[];
}

const Home = ({ stops }: Props) => {
  return (
    <div>
      <h2>``Home Page``</h2>
      <Link className="btn btn-add" to="/new">
        ADD STOP
      </Link>
      <TripList stops={stops} />
    </div>
  );
};

export default Home;
