import DbForm from "./DbForm";
import ScriptForm from "./ScriptForm";

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-lg-6"><DbForm /></div>
        <div className="col-md-6 col-lg-6"><ScriptForm /></div>
      </div>
      
    </div>
  );
}
