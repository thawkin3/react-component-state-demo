// import React, { useState, useRef, useEffect } from 'react';

// GOOD: Handle previous state using a ref
// https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/

// export const GoodPrevStateExample = () => {
//   const [isDisabled, setIsDisabled] = useState(false);

//   const previousIsDisabledRef = useRef(false);

//   useEffect(() => {
//     previousIsDisabledRef.current = isDisabled;
//   }, [isDisabled]);

//   const toggleButton = () => setIsDisabled(!previousIsDisabledRef.current)

//   const toggleButton2Times = () => {
//     for (let i = 0; i < 2; i++) {
//       toggleButton()
//     }
//   }

//   return (
//     <>
//       <h3><span className="good">GOOD</span>: Handle previous state using a ref</h3>
//       <button disabled={isDisabled}>I'm {isDisabled ? 'disabled' : 'enabled'}</button>
//       <button onClick={toggleButton}>Toggle button state</button>
//       <button onClick={toggleButton2Times}>Toggle button state 2 times</button>
//     </>
//   )
// }
