import { useState, useEffect, useRef } from "react";

export default function ScriptForm() {
  const textRef = useRef();
  const [value, setValue] = useState();
  const onChnage = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + 10 + "px";
    }
  }, [value]);

  return (
    <div
      className="card container-fluid"
      style={{
        height: "100%",
      }}
    >
      <div className="card-body">
        <div className="form-floating">
          <textarea
            ref={textRef}
            onChange={onChnage}
            className="form-control"
            disabled
            id="floatingScriptArea"
          >
            {value}
          </textarea>
          <label htmlFor="floatingScriptArea">DB Script</label>
        </div><hr/>
        <div className="d-grid gap-1">
          <button className="btn btn-success" type="button">
            Download Script
          </button>
        </div>
      </div>
    </div>
  );
}
