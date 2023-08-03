import { useContext, useState } from "react";
import { DbContext } from "../context/DbContext";

export default function DbForm() {
  const { setNameDB } = useContext(DbContext);

  return (
    <div className="card mb-12">
      <div>DB Definition</div><hr/>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="DB Name"
            aria-label="DB Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setNameDB(e.target.value)}
          />
        </div>
        <div className="card">
          <div className="card-header">Tables Definition</div>
          <div className="card-body">
            <div className="d-grid gap-1">
              <button className="btn btn-primary" type="button">
                Add Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
