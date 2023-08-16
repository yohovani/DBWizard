import React, { useContext, useState } from "react";
import { DbContext } from "../context/DbContext";

export default function ColumnForm({numCol}) {
    const { createTable, tables } = useContext(DbContext);

    function addName(name){
        if (tables.includes(numCol) === false) {
            createTable()
        } 
        tables[numCol].name = name
        console.log(tables)
    }


    return (
        
            <>
                <th scope="col">
                    <div className="mb-3">

                        <input type="text" className="form-control" id="colName"  placeholder="Col Name" onClick={(e)=> addName(e.value)} />
                    </div>
                </th>
                <th scope="col">
                    <select className="form-select" aria-label="Data Type">
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

                        <input type="text" className="form-control" id="length"  placeholder="Length" />
                    </div>
                </th>
                <th scope="col">
                    <div className="mb-3">

                        <input type="text" className="form-control" id="precision"  placeholder="Precision" />
                    </div>

                </th>
                <th scope="col">
                    <div className="mb-3">

                        <input type="text" className="form-control" id="default"  placeholder="default" />
                    </div>
                </th>
                <th scope="col">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckNull"  />
                    </div>
                </th>
                <th scope="col">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckPK" />
 
                    </div>
                </th>
                <th scope="col">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckFK"  />
                            
                    </div>
                </th>
                <th scope="col">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckAutoincrement"  />

                    </div>
                </th>
                <th scope="col">
                    <div className="mb-3">

                        <textarea className="form-control" id="commentsFormControlTextarea"  rows="3"></textarea>
                    </div>
                </th>
            </>
       

    );
}