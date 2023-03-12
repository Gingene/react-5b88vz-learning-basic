import React, { memo } from 'react';
//HOC
//Shallow compare

const ChildComponent = memo(({ number }) => {
  console.log('ChildComponent Render...');
  return <div>ChildComponent {number}</div>;
});

export default ChildComponent;
