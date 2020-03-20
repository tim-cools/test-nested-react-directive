import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function TestStateNormal() {
  useEffect(() => {
    console.log('TestStateNormal: entry');
    return () => {
      console.log('TestStateNormal: exit');
    }
  }, []);
  return <div>TestStateNormal</div>;
}

function App() {

  function TestStateNested() {
    useEffect(() => {
      console.log('TestStateNested: entry');
      return () => {
        console.log('TestStateNested: exit');
      }
    }, []);
    return <div>TestStateNested</div>;
  }

  const [value, setValue] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a onClick={() => setValue(value + 1)}>+1</a>
        {value}
        <TestStateNormal />
        <TestStateNested />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
