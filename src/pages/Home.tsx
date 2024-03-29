import React from "react";
import { Link } from "react-router-dom";
import { StopModel } from "../models";
import TripList from "../components/TripList";

interface Props {
  stops: StopModel[];
  onEdit: (e: React.FormEvent, id: number) => void;
  // onSubmit: (e: React.FormEvent, id: number) => void;
  onDelete: (e: React.FormEvent, id: number) => void;
  onToggleIsOptional: (e: React.FormEvent, id: number) => void;
  onToggleIsFavorite: (e: React.FormEvent, id: number) => void;
  setStops: React.Dispatch<React.SetStateAction<StopModel[]>>;
}

const Home = ({
  stops,
  // onSubmit,
  onEdit,
  onDelete,
  onToggleIsOptional,
  onToggleIsFavorite,
  setStops,
}: Props) => {
  return (
    <div>
      <TripList
        stops={stops}
        // onSubmit={onSubmit}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleIsOptional={onToggleIsOptional}
        onToggleIsFavorite={onToggleIsFavorite}
        setStops={setStops}
      />
      <Link className="btn btn-add" to="/new">
        ADD STOP
      </Link>
      {/* <div>
        <h4>
          You have x stops on this trip, and your Estimate Time Spending is: xx
          mins
        </h4>
      </div> */}
    </div>
  );
};

export default Home;
