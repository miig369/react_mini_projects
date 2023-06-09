import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdivce] = useState('');

  // using fetch
  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    /*
    fetch('https://api.adviceslip.com/advice')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    */

    setAdivce(data.slip.advice);
    setCount((count) => count + 1);
  }

  // using axios
  async function getAdvice2() {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((res) => {
        setAdivce(res.data.slip.advice);
        setCount((count) => count + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    // getAdvice();
    getAdvice2();
  }, [0]);

  function handleClick() {
    getAdvice();
  }

  return (
    <div>
      <h1>Random Advice Generator</h1>
      <h4>{advice}</h4>
      <button onClick={handleClick}>Generate Advice</button>
      <p>
        You have generated <strong>{count}</strong> times
      </p>
    </div>
  );
}

export default App;
