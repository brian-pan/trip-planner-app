import React from "react";
import { GrHtml5 } from "react-icons/gr";
import Stop from "../components/Stop";
import { StopModel } from "../models";

interface Props {
  stops: StopModel[];
  onEdit: (e: React.FormEvent, id: number) => void;
  // onSubmit: (e: React.FormEvent, id: number) => void;
  onDelete: (e: React.FormEvent, id: number) => void;
  onToggleIsOptional: (e: React.FormEvent, id: number) => void;
  onToggleIsFavorite: (e: React.FormEvent, id: number) => void;
  setStops: React.Dispatch<React.SetStateAction<StopModel[]>>;
}

const TripList = ({
  stops,
  // onSubmit,
  onEdit,
  onDelete,
  onToggleIsOptional,
  onToggleIsFavorite,
  setStops,
}: Props) => {
  return (
    <div className="stops-list">
      {stops.length === 0 ? (
        <h2>No stops yet</h2>
      ) : (
        stops.map((stop) => (
          <Stop
            stop={stop}
            stops={stops}
            key={stop.id}
            // onSubmit={onSubmit}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleIsOptional={onToggleIsOptional}
            onToggleIsFavorite={onToggleIsFavorite}
            setStops={setStops}
          />
        ))
      )}
    </div>
  );
};
export default TripList;
