import './App.css';
import { randomColor } from 'randomcolor';
import { useState } from 'react';
import frame from './frame.png';

export default function App() {
  const [color, setColor] = useState(randomColor);
  const [valueHue, setValueHue] = useState('');
  const [valueLightness, setValueLightness] = useState('');

  return (
    <div className="app">
      <div style={{ background: color }}>
        <div className="generated-color">Generated Color: {color}</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="inputs-component">
            <label>
              {' '}
              Hue:
              <input
                placeholder="Hue"
                // Connect the state with input value
                value={valueHue}
                onChange={(e) => {
                  // Update state on change event
                  setValueHue(e.currentTarget.value);
                }}
              />
            </label>
            <label>
              {' '}
              Lightness:
              <input
                placeholder="Lightness"
                value={valueLightness}
                onChange={(e) => {
                  setValueLightness(e.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div className="button-container">
            <button
              onClick={() =>
                setColor(
                  randomColor({ hue: valueHue, lightness: valueLightness }),
                )
              }
            >
              Generate
            </button>
          </div>
          <img src={frame} alt="Frame" />
        </form>
      </div>
    </div>
  );
}
