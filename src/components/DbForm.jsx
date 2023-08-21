
import { createRoot } from 'react-dom/client';
import React, { useContext, useState } from "react";
import { DbContext } from "../context/DbContext";
import ColumnForm from "./ColumnForm";

export default function DbForm() {
  const { setNameDB } = useContext(DbContext);
  const [numCol, setNumCol] = useState(0)
  const [table, setTable] = useState({})
  const [numTable, setNumTable] = useState(-1)
  const { addTable } = useContext(DbContext);

  const ChildComponent = () => {
    return <ColumnForm numCol={numCol} numTable={numTable}/>;
  };


  const [childComponents, setChildComponents] = useState([]);

  const addChildComponent = () => {
    setChildComponents([...childComponents, <ChildComponent key={childComponents.length} />]);
  };

  return (
    <div className="card mb-12">
      <div>DB Definition</div><hr />
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
              <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#FormDbModal" onClick={() => {setNumTable(numTable+1); addTable({"name":"","columns":[]})}}>
                Add Table
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade modal-xl" id="FormDbModal" tabIndex="-1" aria-labelledby="FormDbModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="FormDbModalLabel">Add Table</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Data Type</th>
                    <th scope="col">Length</th>
                    <th scope="col">Precision</th>
                    <th scope="col">Default Value</th>
                    <th scope="col">Nullability</th>
                    <th scope="col">Primary Key</th>
                    <th scope="col">Foreign Key</th>
                    <th scope="col">Autoincrement</th>
                    <th scope="col">Comments</th>
                  </tr>
                </thead>
                <tbody id="FormColumnDb">
                  {childComponents.map((child, index) => (
                    <tr key={index}>{child}</tr>
                  ))}
                </tbody>

              </table>
              <button type="button" className="btn btn-success" onClick={() => {setNumCol(numCol+1); addChildComponent()}}>Add Column</button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
