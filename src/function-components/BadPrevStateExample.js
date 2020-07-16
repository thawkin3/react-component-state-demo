import React, { useState } from 'react';

// BAD: Previous state is NOT handled for you automatically!

export const BadPrevStateExample = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleButton = () => setIsDisabled(!isDisabled)

  const toggleButton2Times = () => {
    for (let i = 0; i < 2; i++) {
      toggleButton()
    }
  }

  return (
    <>
      <h3><span className="bad">BAD</span>: Previous state is NOT handled for you automatically!</h3>
      <button disabled={isDisabled}>I'm {isDisabled ? 'disabled' : 'enabled'}</button>
      <button onClick={toggleButton}>Toggle button state</button>
      <button onClick={toggleButton2Times}>Toggle button state 2 times</button>
    </>
  )
}
