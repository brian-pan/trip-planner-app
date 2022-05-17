import React, { useEffect, useRef, useState } from "react";
import { StopModel } from "../models";

import {
  AiOutlineEdit,
  AiFillEdit,
  AiFillDelete,
  AiFillEyeInvisible,
  AiOutlineEyeInvisible,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";

interface Props {
  stop: StopModel;
  onEdit: (e: React.FormEvent, id: number) => void;
  onSubmit: (e: React.FormEvent, id: number) => void;
  onDelete: (e: React.FormEvent, id: number) => void;
  onToggleIsOptional: (e: React.FormEvent, id: number) => void;
  onToggleIsFavorite: (e: React.FormEvent, id: number) => void;
}

const Stop = ({
  stop,
  onSubmit,
  onEdit,
  onDelete,
  onToggleIsOptional,
  onToggleIsFavorite,
}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onToggleEditingMode = () => {
    if (!isEditing) {
      setIsEditing(!isEditing);
    }
  };

  return (
    <>
      <form className="stop" onSubmit={(e) => onSubmit(e, stop.id)}>
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
        <div className="stop-icons">
          <span className="stop-icon" onClick={onToggleEditingMode}>
            <AiOutlineEdit />
          </span>
          <span className="stop-icon" onClick={(e) => onDelete(e, stop.id)}>
            <AiFillDelete />
          </span>
          <span
            className={`stop-icon stop-icon-isOptional-${stop.isOptional}`}
            //if isOptional = true, then color grey
            onClick={(e) => onToggleIsOptional(e, stop.id)}
          >
            {stop.isOptional ? (
              <AiOutlineEyeInvisible />
            ) : (
              <MdOutlineVisibility />
            )}
          </span>
          <span
            className="stop-icon"
            onClick={(e) => onToggleIsFavorite(e, stop.id)}
          >
            {stop.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </span>
        </div>
      </form>
    </>
  );
};

export default Stop;
