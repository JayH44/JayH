import React from 'react';
import ReducerContextSample from './components/ReducerContextSample';
import { SampleProvider } from './components/SampleContext';

function App() {
  return (
    <SampleProvider>
      <ReducerContextSample />
    </SampleProvider>
  );
}

export default App;
