import React, { useState } from 'react';

export const GoodUseStateHookExample = () => {
  const initialState = ['red', 'blue', 'green'];
  const [colors, setColors] = useState(initialState);

  const addYellow = () => setColors(colors => [...colors, 'yellow']);

  return (
    <>
      <h3><span className="good">GOOD</span>: Use the setter function returned from useState</h3>
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
