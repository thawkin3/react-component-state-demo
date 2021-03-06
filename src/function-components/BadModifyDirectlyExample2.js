import React, { useState } from 'react';

export const BadModifyDirectlyExample2 = () => {
  const initialState = ['red', 'blue', 'green'];
  let [colors] = useState(initialState);

  const addYellow = () => colors = [...colors, 'yellow'];

  return (
    <>
      <h3><span className="bad">BAD</span>: Don't modify state directly (spread)</h3>
      <div>
        My favorite colors are:
        <ul>
          {colors.map((color, index) => <li key={`${color}-${index}`}>{color}</li>)}
        </ul>
      </div>
      <button onClick={addYellow}>Add "yellow" to list</button>
    </>
  );
}
