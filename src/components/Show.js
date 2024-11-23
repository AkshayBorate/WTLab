import React, { useRef, useState } from "react";

export default function Show() {
  var x1 = useRef();
  const [data, setdata] = useState([]);
  function f1() {
    fetch(`http://localhost:9000/getdata/${x1.current.value}`)
      .then((res) => res.json())
      .then((val) => {
        setdata(val);
      });
  }

  return (
    <>
      <div>
        <input type="text" ref={x1} />
        <br />
        <button onClick={f1}>Get</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">OrderId</th>
            <th scope="col">OrderDate</th>
            <th scope="col">Location</th>
            <th scope="col">Fees</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((val) => (
              <tr>
                <td>{val.orderId}</td>
                <td>{val.deliveryDate}</td>
                <td>{val.deliveryAddress}</td>
                <td>{val.deliveryFee}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
