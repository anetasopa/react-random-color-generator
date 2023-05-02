import './App.css';
import { randomColor } from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);

  return (
    <div className="app">
      <div style={{ background: color }}>
        <span className="color-text">{color}</span>
      </div>
      <div className="button-container">
        <button onClick={() => setColor(randomColor)}>Generate</button>
      </div>
    </div>
  );
}
