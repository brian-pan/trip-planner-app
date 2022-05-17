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

interface Props {
  stop: StopModel;
  onEdit: (e: React.FormEvent, id: number) => void;
  onDelete: (e: React.FormEvent, id: number) => void;
  onToggleIsOptional: (e: React.FormEvent, id: number) => void;
  onToggleIsFavorite: (e: React.FormEvent, id: number) => void;
}

const Stop = ({
  stop,
  onEdit,
  onDelete,
  onToggleIsOptional,
  onToggleIsFavorite,
}: Props) => {
  return (
    <>
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
        <div className="stop-icons">
          <span className="stop-icon" onClick={(e) => onEdit(e, stop.id)}>
            <AiOutlineEdit />
          </span>
          <span className="stop-icon" onClick={(e) => onDelete(e, stop.id)}>
            <AiFillDelete />
          </span>
          <span
            className="stop-icon"
            onClick={(e) => onToggleIsOptional(e, stop.id)}
          >
            <AiOutlineEyeInvisible />
          </span>
          <span
            className="stop-icon"
            onClick={(e) => onToggleIsFavorite(e, stop.id)}
          >
            <AiOutlineHeart />
          </span>
        </div>
      </form>
    </>
  );
};

export default Stop;
