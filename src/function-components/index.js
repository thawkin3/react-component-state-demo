import React from 'react';
import { BadModifyDirectlyExample } from './BadModifyDirectlyExample';
import { BadModifyDirectlyExample2 } from './BadModifyDirectlyExample2';
import { GoodUseStateHookExample } from './GoodUseStateHookExample';
import { BadPrevStateExample } from './BadPrevStateExample';
import { GoodPrevStateExample } from './GoodPrevStateExample';
import { BadAsyncExample } from './BadAsyncExample';
import { GoodAsyncExample } from './GoodAsyncExample';

export const FunctionComponentExamples = () => (
  <>
    <h2>Function Component Examples</h2>
    <hr />
    <BadModifyDirectlyExample />
    <hr />
    <BadModifyDirectlyExample2 />
    <hr />
    <GoodUseStateHookExample />
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
