import React from 'react';
import { BadModifyDirectlyExample } from './BadModifyDirectlyExample';
import { BadModifyDirectlyExample2 } from './BadModifyDirectlyExample2';
import { GoodSetStateExample } from './GoodSetStateExample';
import { BadPrevStateExample } from './BadPrevStateExample';
import { GoodPrevStateExample } from './GoodPrevStateExample';
import { BadAsyncExample } from './BadAsyncExample';
import { GoodAsyncExample } from './GoodAsyncExample';

export class ClassComponentExamples extends React.Component {
  render() {
    return (
      <>
        <h2>Class Component Examples</h2>
        <hr />
        <BadModifyDirectlyExample />
        <hr />
        <BadModifyDirectlyExample2 />
        <hr />
        <GoodSetStateExample />
        <hr />
        <BadPrevStateExample />
        <hr />
        <GoodPrevStateExample />
        <hr />
        <BadAsyncExample />
        <hr />
        <GoodAsyncExample />
      </>
    );
  }
}
