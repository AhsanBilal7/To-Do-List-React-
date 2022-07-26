import React, { useState } from "react";

function Form() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [ffname, setffname] = useState("");
  const [llname, setllname] = useState("");
  const onsubmit = (event) => {
    event.preventDefault();
    setffname(fname);
    setllname(lname);
  };
  const lchange = (event) => {
    setlname(event.target.value);
  };
  const fchange = (event) => {
    setfname(event.target.value);
    console.log(fname);
  };
  return (
    <>
      <div>
        <form onSubmit={onsubmit}>
          <label>
            Hello {ffname} {llname}
          </label>
          <input value={fname} onChange={fchange} type="text" />
          <br />

          <input onChange={lchange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
