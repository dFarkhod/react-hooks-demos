import React, { useState } from 'react'

function HookCounter() {

  const [count, setCount] = useState(7); // 2ta elementdan iborat bo'lgan qator qaytariladi
  const [name, setName] = useState("Farhod");
  /*
    const count = countState[0]; // birinchi elementda o'zgarvuchining o'zi saqlanadi
    const setCount = countState[1]; // ikkinchisida funktsiya saqlanadi
  */
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter;
