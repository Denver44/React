//  JSX in react

import React from 'react';
import ReactDOM from 'react-dom';

// 1st Way
ReactDOM.render(<h1> Denver !! </h1>, document.getElementById('root')); // It Most Feasible way.

/* <h1> Denver!! </h1>; this is actually called Jsx (Javascript Expression) */

// 2nd Way
//  if we haven't import React from 'react" then write this way
/*#__PURE__*/
ReactDOM.render(
  React.createElement('h1', null, ' Denver!! '),
  document.getElementById('root')
);

// 3rd Way
// Using vanilla Javascript
let h1 = document.createElement('h1');
h1.innerHTML = `LEARNING REACT`;
document.getElementById('root').appendChild(h1);
