import React from 'react';
import { ClassComponentExamples } from './class-components';
import { FunctionComponentExamples } from './function-components';

function App() {
  return (
    <main>
      <h1>React Component State Demo</h1>
      <hr />
      <ClassComponentExamples />
      <hr />
      <FunctionComponentExamples />
    </main>
  );
}

export default App;
