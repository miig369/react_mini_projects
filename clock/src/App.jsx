import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTimer] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <div>
        <h1>{time}</h1>
      </div>
    </>
  );
}

export default App;
