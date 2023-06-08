import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [advice, setAdivce] = useState('');

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    setAdivce(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(() => {
    getAdvice();
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
