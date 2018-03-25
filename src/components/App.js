import React from 'react';
import Stream from './Stream';

const technologies = [
  {
    title: 'React',
    id: 0,
  },
  {
    title: 'Webpack',
    id: 1,
  },
];

const App = () => (
  <Stream technologies={technologies} />
);

export default App;
