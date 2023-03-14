import React, { useState, useRef } from 'react';
import './style.css';

// memo useCallback useMemo

export default function App() {
  // const [value, setValue] = useState('');
  // const inputRef = useRef(null);
  const cyanRef = useRef(null);
  const orangeRef = useRef(null);

  console.log('App render...');

  const submitHandler = () => {
    console.log(inputRef.current.value);
    inputRef.current.type = 'password';
  };

  const goOrange = () => {
    window.scrollTo({
      top: orangeRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const goCyan = () => {
    window.scrollTo({
      top: cyanRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      {/* <div className="ref-teaching">
        <input type="text" ref={inputRef} />
        <button onClick={submitHandler}>Sumbit</button>
        <br />
      </div> */}

      {/* offsetTop */}
      <div style={{ height: '600px', backgroundColor: 'cyan' }} ref={cyanRef}>
        <button onClick={goOrange}>Go Orange</button>
      </div>
      <div
        style={{ height: '600px', backgroundColor: 'orange' }}
        ref={orangeRef}
      >
        <button onClick={goCyan}>Go Cyan</button>
      </div>
      <div style={{ height: '600px', backgroundColor: 'red' }} ref={orangeRef}>
        <button onClick={goCyan}>Go Cyan</button>
      </div>
      {/* 每次使用者在輸入input的時候 你就要去檢查他輸入的文字(value) 有沒有符合自己定義的規則(即時檢查)就不要使用useRef 反之輸入完再檢查就使用useRef*/}
    </div>
  );
}
