import React, { useContext, useState } from 'react';
import { DbContext } from '../context/DbContext';
import ColumnForm from './ColumnForm';

const TableColumn = ({ index, nt }) => {
  console.log(nt)
  return (
    <tr>
      <ColumnForm numCol={index} numTable={nt} />
    </tr>
  );
};

const DbForm = () => {
  const { setNameDB, tables, addTable } = useContext(DbContext);
  const [numCol, setNumCol] = useState(0);
  const [numTable, setNumTable] = useState(-1);
  const [childComponents, setChildComponents] = useState([]);

  const handleAddTable = () => {
    setNumTable(numTable + 1);
    addTable({ name: '', columns: [] });
  };

  const handleAddColumn = () => {
    setNumCol(numCol + 1);
    setChildComponents([...childComponents, <TableColumn key={numCol} index={numCol} nt={numTable} />]);
  };

  return (
    <div className="card mb-12">
      {/* ... */}
      <div className="card-body">
        {/* ... */}
        <div className="card">
          {/* ... */}
          <div className="card-body">
            <div className="d-grid gap-1">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#FormDbModal"
                onClick={handleAddTable}
              >
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
              <h1 className="modal-title fs-5" id="FormDbModalLabel">
                Add Table
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
            <div className="mb-3">
                <label htmlFor="tableName" className="form-label">
                  Table Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="tableName"
                  placeholder="Table Name"
                  onChange={(e) => {
                    tables[numTable].name = e.target.value;
                  }}
                />
              </div>

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
                    <TableColumn key={index} index={index} />
                  ))}
                </tbody>
              </table>
              <button type="button" className="btn btn-success" onClick={handleAddColumn}>
                Add Column
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DbForm;
