import React from "react";
import Stop from "../components/Stop";
import { StopModel } from "../models";

interface Props {
  stops: StopModel[];
  onEdit: (e: React.FormEvent, id: number) => void;
  onSubmit: (e: React.FormEvent, id: number) => void;
  onDelete: (e: React.FormEvent, id: number) => void;
  onToggleIsOptional: (e: React.FormEvent, id: number) => void;
  onToggleIsFavorite: (e: React.FormEvent, id: number) => void;
}

const TripList = ({
  stops,
  onSubmit,
  onEdit,
  onDelete,
  onToggleIsOptional,
  onToggleIsFavorite,
}: Props) => {
  return (
    <div className="stops-list">
      {stops.map((stop) => (
        <Stop
          stop={stop}
          key={stop.id}
          onSubmit={onSubmit}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleIsOptional={onToggleIsOptional}
          onToggleIsFavorite={onToggleIsFavorite}
        />
      ))}
    </div>
  );
};
export default TripList;
