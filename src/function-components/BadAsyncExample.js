import React, { useState } from 'react';

export const BadAsyncExample = () => {
  const [name, setName] = useState('John');

  const setNameToMatt = () => {
    setName('Matt');
    alert(`The name is now... ${name}!`);
  };

  return (
    <>
      <h3><span className="bad">BAD</span>: Don't forget that the useState hook updates state asynchronously</h3>
      <div>
        My name is {name}.
      </div>
      <button onClick={setNameToMatt}>Change name to "Matt"</button>
    </>
  );
}
