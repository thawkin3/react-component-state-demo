import React, { useState } from 'react';

export const GoodPrevStateExample = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleButton = () => setIsDisabled(isDisabled => !isDisabled);

  const toggleButton2Times = () => {
    for (let i = 0; i < 2; i++) {
      toggleButton();
    }
  }

  return (
    <>
      <h3><span className="good">GOOD</span>: When setting state that relies on the previous state, do so as a function of previous state</h3>
      <button disabled={isDisabled}>I'm {isDisabled ? 'disabled' : 'enabled'}</button>
      <button onClick={toggleButton}>Toggle button state</button>
      <button onClick={toggleButton2Times}>Toggle button state 2 times</button>
    </>
  );
}
