import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [user, setUser] = useState({
    name: 'John',
    age: 24,
    gender: 'male',
  });

  const changeUserName = () => {
    setUser({
      ...user,
      name: 'Alex',
    });
  };

  return (
    <div className="App">
      <button onClick={changeUserName}>Click</button>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>gender: {user.gender}</p>
    </div>
  );
}
