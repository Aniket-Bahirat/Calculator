import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      if (!input) {
        setResult('Error');
      } else {
        try {
          let newResult = eval(input);
          if (newResult === Infinity || newResult === -Infinity) {
            setResult('Infinity');
          } else if (isNaN(newResult)) {
            setResult('NaN');
          } else {
            setResult(newResult.toString());
          }
        } catch (error) {
          setResult('Error');
        }
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '0', 'C', '=', '/'
  ];

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly className="calculator-input" />
        <div className="calculator-result">
          {result}
        </div>
        <div className="calculator-buttons">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button)}
              className="calculator-button"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
