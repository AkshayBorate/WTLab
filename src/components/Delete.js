import React, { useRef } from "react";

export default function Delete() {
  var x1 = useRef();

  function f1() {
    fetch(`http://localhost:9000/delete/${x1.current.value}`, {
      method: "DELETE",
    });
  }

  return (
    <div>
      <input type="text" ref={x1} />
      <br />

      <button onClick={f1}>Order</button>
    </div>
  );
}
