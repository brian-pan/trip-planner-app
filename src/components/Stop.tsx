import React, { useEffect, useRef, useState } from "react";
import { StopModel, EditedStopModel } from "../models";

import {
  AiOutlineEdit,
  AiFillEdit,
  AiFillDelete,
  AiFillEyeInvisible,
  AiOutlineEyeInvisible,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import {
  MdOutlineVisibility,
  MdDoneOutline,
  MdOutlineAccessTime,
} from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { GrLocationPin } from "react-icons/gr";

interface Props {
  stop: StopModel;
  stops: StopModel[];
  onEdit: (e: React.FormEvent, id: number) => void;
  // onSubmit: (e: React.FormEvent, id: number) => void;
  onDelete: (e: React.FormEvent, id: number) => void;
  onToggleIsOptional: (e: React.FormEvent, id: number) => void;
  onToggleIsFavorite: (e: React.FormEvent, id: number) => void;
  setStops: React.Dispatch<React.SetStateAction<StopModel[]>>;
}

const Stop = ({
  stop,
  stops,
  // onSubmit,
  onEdit,
  onDelete,
  onToggleIsOptional,
  onToggleIsFavorite,
  setStops,
}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedStop, setEditedStop] = useState<EditedStopModel>(stop);

  const onToggleEditingMode = () => {
    if (!isEditing) {
      setIsEditing(!isEditing);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedStop((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setStops(
      stops.map((stop) =>
        stop.id === id
          ? {
              ...stop,
              location: editedStop.location,
              name: editedStop.name,
              length: editedStop.length,
            }
          : stop
      )
    );
    setIsEditing(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  return (
    <>
      <form className="stop" onSubmit={(e) => onSubmit(e, stop.id)}>
        {isEditing ? (
          <>
            <div className="stop-editing">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="input"
                  id="location"
                  placeholder="enter destination location"
                  name="location"
                  value={editedStop.location}
                  onChange={onChange}
                  ref={inputRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Spot Name</label>
                <input
                  type="input"
                  id="name"
                  placeholder="enter spot name"
                  name="name"
                  value={editedStop.name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="length">Time Length</label>
                <input
                  type="input"
                  id="length"
                  placeholder="Time Length in Minute"
                  name="length"
                  value={editedStop.length}
                  onChange={onChange}
                />
              </div>
            </div>
            <button className="stop-icons" type="submit">
              <span className="stop-icon">SAVE</span>
            </button>
          </>
        ) : (
          <div className="stop-card">
            <div className="stop-content">
              <div className="stop-content-location">
                <h3>
                  <GoLocation className="inline-icon" /> {stop.location}
                </h3>
              </div>
              <div className="stop-content-name">
                <h3>
                  <GrLocationPin className="inline-icon" /> {stop.name}
                </h3>
              </div>
              <div className="stop-content-length">
                <h3>
                  <MdOutlineAccessTime className="inline-icon" /> {stop.length}{" "}
                  mins
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
          </div>
        )}
      </form>
    </>
  );
};

export default Stop;
