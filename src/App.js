import React, { useState, useCallback, useMemo } from 'react';
import './style.css';

// memo useCallback useMemo

export default function App() {
  const [value, setValue] = useState('');

  console.log('App Render...');

  // const expensiveValue = useMemo(() => {}, []);

  const ManyItem = useMemo(() => {
    console.log('ManyItem Render...');
    const array = new Array(100).fill(1);
    return (
      <>
        {array.map((_, i) => (
          <p>{i}</p>
        ))}
      </>
    );
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{value}</p>

      {/* <ManyItem /> */}
      {ManyItem}
    </div>
  );
}
