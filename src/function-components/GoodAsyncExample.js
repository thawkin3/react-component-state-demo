import React, { useState, useEffect } from 'react';

export const GoodAsyncExample = () => {
  const [name, setName] = useState('John');

  useEffect(() => {
    if (name !== 'John') {
      alert(`The name is now... ${name}!`);
    }
  }, [name])

  const setNameToMatt = () => setName('Matt');

  return (
    <>
      <h3><span className="good">GOOD</span>: Use the useEffect hook for callbacks after state has changed</h3>
      <div>
        My name is {name}.
      </div>
      <button onClick={setNameToMatt}>Change name to "Matt"</button>
    </>
  );
}
