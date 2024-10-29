import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [pattern, setPattern] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePattern(count);
  };

  const generatePattern = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++) {
      result.push('*'.repeat(i));
    }
    for (let i = num - 1; i >= 1; i--) {
      result.push('*'.repeat(i));
    }
    setPattern(result);
  };

   return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="number" value={count} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {pattern.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
  
}


export default App
