import React, { useState } from "react";
import { add } from "@demo/math/lib";

export default function App() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [res, setRes] = useState<number | undefined>();

  const handleCalculate = () => {
    setRes(add(x, y));
  };

  return (
    <div>
      <h1>Hello!</h1>

      <input
        type="number"
        value={x}
        onChange={(ev) => setX(Number(ev.target.value))}
      />
      <input
        type="number"
        value={y}
        onChange={(ev) => setY(Number(ev.target.value))}
      />
      <button onClick={handleCalculate}>add</button>
      <p>add: {res}</p>
    </div>
  );
}
