import React, { useRef } from "react";

export default function Add() {
  var x1 = useRef();
  var x2 = useRef();
  var x3 = useRef();
  var x4 = useRef();

  function f1() {
    var data = {
      orderId: x1.current.value,
      deliveryDate: x2.current.value,
      deliveryAddress: x3.current.value,
      deliveryFee: x4.current.value,
    };

    data = JSON.stringify(data);

    fetch(`http://localhost:9000/add`, {
      method: "POST",
      body: data,
      headers: { "content-type": "application/json" },
    });
  }

  return (
    <div>
      <input type="text" ref={x1} />
      <br />
      <input type="text" ref={x2} />
      <br />
      <input type="text" ref={x3} />
      <br />
      <input type="text" ref={x4} />
      <br />
      <button onClick={f1}>Order</button>
    </div>
  );
}
