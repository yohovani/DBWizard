import { useContext, useState } from "react";
import { DbContext } from "../context/DbContext";

export default function DbForm() {
  const { setNameDB } = useContext(DbContext);
  const [numCol, setNumCol] = useState(0)

  function updateName(nc){
    tableJson = document.getElementById("table"+nc).value
    tableJson["name"] = document.getElementById("dbName"+nc)
    console.log(tableJson)
  }

  function updateType(nc){
    tableJson = document.getElementById("table"+nc).value
  }
  function updateLength(nc){
    tableJson = document.getElementById("table"+nc).value
  }
  function updatePrecision(nc){
    tableJson = document.getElementById("table"+nc).value
  }
  function updateDefault(nc){
    tableJson = document.getElementById("table"+nc).value
  }
  function updateNull(nc){
    tableJson = document.getElementById("table"+nc).value
  }
  function updatePK(nc){
    tableJson = document.getElementById("table"+nc).value
  }
  function updateFK(nc){
    tableJson = document.getElementById("table"+nc).value
  }
  function updateAutoincrement(nc){
    tableJson = document.getElementById("table"+nc).value
  }
  function updateComments(nc){
    tableJson = document.getElementById("table"+nc).value
  }

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
              <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#FormDbModal">
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

                </tbody>

              </table>
              <button type="button" className="btn btn-success" onClick={(e) => {
                document.getElementById("FormColumnDb").innerHTML += '<tr><input type="hidden" id="table'+numCol+'" value="{}"><th scope="col"><div class="mb-3"><input type="text" class="form-control" id="dbName'+numCol+'" placeholder="DB Name" onchange="updateName('+numCol+')"></div></th><th scope="col"><select class="form-select" aria-label="Data Type" onchange="updateType('+numCol+')"><option value="INTEGER">INTEGER</option><option value="VARCHAR">VARCHAR</option><option value="CHAR">CHAR</option><option value="DATE">DATE</option><option value="TIME">TIME</option><option value="DATETIME">DATETIME</option><option value="FLOAT">FLOAT</option><option value="DECIMAL">DECIMAL</option><option value="BOOLEAN">BOOLEAN</option><option value="BLOB">BLOB</option><option value="TEXT">TEXT</option><option value="ENUM">ENUM</option><option value="SET">SET</option><option value="TIMESTAMP">TIMESTAMP</option><option value="INT">INT</option><option value="DOUBLE">DOUBLE</option><option value="CHARACTER">CHARACTER</option></select></th><th scope="col"><input type="text"class="form-control" id="length'+numCol+'" placeholder="Length" onchange="updateLength('+numCol+')"></div></th><th scope="col"><div class="mb-3"><input type="text"class="form-control" id="precision'+numCol+'" placeholder="Precision" onchange="updatePrecision('+numCol+')"></div></th><th scope="col"><div class="mb-3"><input type="text"class="form-control" id="default'+numCol+'" placeholder="default" onclick="updateDefault('+numCol+')"></div></th><th scope="col"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch"id="flexSwitchCheckNull'+numCol+'" onclick="updateNull('+numCol+')"></div></th><th scope="col"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch"id="flexSwitchCheckPK'+numCol+'" onclick="updatePK('+numCol+')"></div></th><th scope="col"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch"id="flexSwitchCheckFK'+numCol+'" onclick="updateFK('+numCol+')"></div></th><th scope="col"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch"id="flexSwitchCheckAutoincrement'+numCol+'" onclick="updateAutoincrement('+numCol+')"></div></th><th scope="col"><div class="mb-3"><textarea class="form-control" id="commentsFormControlTextarea'+numCol+'" rows="3" onchange="updateComments('+numCol+')"></textarea></div></th></tr'; 
                setNumCol(numCol+1);}}>Add Column</button>
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
