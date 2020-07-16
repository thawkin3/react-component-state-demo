import React from 'react';
import { ModifyDirectlyExample } from './ModifyDirectlyExample';
import { UseStateHookExample } from './UseStateHookExample';
import { BadPrevStateExample } from './BadPrevStateExample';

export const FunctionComponentExamples = () => (
  <>
    <h2>Function Component Examples</h2>
    <hr />
    <ModifyDirectlyExample />
    <hr />
    <UseStateHookExample />
    <hr />
    <BadPrevStateExample />
  </>
)
