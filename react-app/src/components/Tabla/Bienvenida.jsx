import React, { useState } from 'react';
export default function Bienvenida() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div class="container col-md-12">
        <div class="text-center">
          <p>
            <label htmlFor="" class="h1 t3"> Bienvenidos a CasaWeb </label>
          </p>
        </div>
      </div>
      <div>
        <p>You clicked {count} times
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </p>
      </div>
    </>
  )
}
