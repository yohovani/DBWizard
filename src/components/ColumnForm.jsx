import React, { useContext, useState } from "react";
import { DbContext } from "../context/DbContext";

export default function ColumnForm({ numCol, numTable }) {
    const { tables,addColumn } = useContext(DbContext);
    console.log(numTable)
    var column =  {
        "name": "",
        "properties": {
            "Type": "INTEGER",
            "Length": 0,
            "Precision": 0,
            "Default Value": "",
            "Nullability": false,
            "Primary Key": false,
            "Foreign Key": false,
            "Autoincrement": false,
            "Comments": ""
          }
    }

    addColumn(numTable, column)

  return (
    <>
      <th scope="col">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id={"colName"+numCol}
            placeholder="Col Name"
            onChange={(e) => tables[numTable].columns[numCol]["name"] = e.target.value}
          />
        </div>
      </th>
      <th scope="col">
        <select className="form-select" aria-label="Data Type" onChange={(e) => tables[numTable].columns[numCol]["properties"]["Type"] = e.target.value}>
          <option value="INTEGER">INTEGER</option>
          <option value="VARCHAR">VARCHAR</option>
          <option value="CHAR">CHAR</option>
          <option value="DATE">DATE</option>
          <option value="TIME">TIME</option>
          <option value="DATETIME">DATETIME</option>
          <option value="FLOAT">FLOAT</option>
          <option value="DECIMAL">DECIMAL</option>
          <option value="BOOLEAN">BOOLEAN</option>
          <option value="BLOB">BLOB</option>
          <option value="TEXT">TEXT</option>
          <option value="ENUM">ENUM</option>
          <option value="SET">SET</option>
          <option value="TIMESTAMP">TIMESTAMP</option>
          <option value="INT">INT</option>
          <option value="DOUBLE">DOUBLE</option>
          <option value="CHARACTER">CHARACTER</option>
        </select>
      </th>
      <th scope="col">
        <div className="mb-3">
          <input
            type="number" min="0" step="1"
            pattern="[0-9]+"
            className="form-control"
            id={"length"+numCol}
            placeholder="Length"
            onChange={(e) => tables[numTable].columns[numCol]["properties"]["Length"] = e.target.value}
          />
        </div>
      </th>
      <th scope="col">
        <div className="mb-3">
          <input
            pattern="[0-9]+"
            className="form-control"
            id={"precision"+numCol}
            type="number" min="0" step="1"
            placeholder="Precision"
            onChange={(e) => tables[numTable].columns[numCol]["properties"]["Precision"] = e.target.value}
          />
        </div>
      </th>
      <th scope="col">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id={"default"+numCol}
            placeholder="default"
            onChange={(e) => tables[numTable].columns[numCol]["properties"]["Default Value"] = e.target.value}
          />
        </div>
      </th>
      <th scope="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={"flexSwitchCheckNull"+numCol}
            onClick={(e) => {tables[numTable].columns[numCol]["properties"]["Nullability"] = (e.target.checked) ? true : false;}}
          />
        </div>
      </th>
      <th scope="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={"flexSwitchCheckPK"+numCol}
            onClick={(e) => {tables[numTable].columns[numCol]["properties"]["Primary Key"] = (e.target.checked) ? true : false;}}
          />
        </div>
      </th>
      <th scope="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={"flexSwitchCheckFK"+numCol}
            onClick={(e) => {tables[numTable].columns[numCol]["properties"]["Foreign Key"] = (e.target.checked) ? true : false;}}
          />
        </div>
      </th>
      <th scope="col">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id={"flexSwitchCheckAutoincrement"+numCol}
            onClick={(e) => {tables[numTable].columns[numCol]["properties"]["Autoincrement"] = (e.target.checked) ? true : false;}}
          />
        </div>
      </th>
      <th scope="col">
        <div className="mb-3">
          <textarea
            className="form-control"
            id={"commentsFormControlTextarea"+numCol}
            rows="3"
            onChange={(e) => tables[numTable].columns[numCol]["properties"]["Comments"] = e.target.value}
            onClick={() => console.log(tables)}
          ></textarea>
        </div>
      </th>
    </>
  );
}
