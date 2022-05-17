import React from "react";
import { Navigate, Link } from "react-router-dom";
import { StopModel } from "../models";

interface Props {
  onSubmit: (e: React.FormEvent) => void;
  stop: StopModel;
  setStop: React.Dispatch<React.SetStateAction<StopModel>>;
}

const AddStop = ({ onSubmit, stop, setStop }: Props) => {
  const { location, name, length, isOptional, isFavorite } = stop;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setStop((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  console.log("AddStop, change state", stop);

  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="input"
            id="location"
            placeholder="enter destination location"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Spot Name</label>
          <input
            type="input"
            id="name"
            placeholder="enter spot name"
            name="name"
            value={name}
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
            value={length}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isOptional">Optional Place</label>
          <input
            type="checkbox"
            id="isOptional"
            name="isOptional"
            checked={isOptional}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isFavorite">Favorite Place</label>
          <input
            type="checkbox"
            id="isFavorite"
            name="isFavorite"
            checked={isFavorite}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn">
            ADD
          </button>
        </div>
        <Link to="/">Back</Link>
      </form>
    </div>
  );
};

export default AddStop;
