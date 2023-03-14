import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [showText, setShowText] = useState(false);


  return (
    <div className="App">
      <button onClick={() => setShowText(!showText)}>Toggle</button>
      {/* {showText ? <p>Hello World</p> : null} */}
      {/* {showText ? <SayHello /> : null} */}
      {showText && <SayHello />}
    </div>
  );
}

const SayHello = () => <h1>Hello</h1>;
