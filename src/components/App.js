import React from 'react';
import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [cal, setCal] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  //FUNCTION CREATE DIGITS
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          key={i}
          className="calculator__button calculator__button--digits"
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <>
      <div className="container">
        {' '}
        <div className="calculator">
          <div className="calculator__display">
            <span className="calculator__display--result">0</span>0
          </div>

          {/* OPERATORS */}
          <div className="calculator__operators">
            <button className="calculator__button calculator__button--operators">
              /
            </button>
            <button className="calculator__button calculator__button--operators">
              *
            </button>
            <button className="calculator__button calculator__button--operators">
              +
            </button>
            <button className="calculator__button calculator__button--operators">
              -
            </button>

            <button className="calculator__button calculator__button--operators">
              DEL
            </button>
          </div>

          {/* DIGITS */}
          <div className="calculator__digits">
            {createDigits()}
            <button className="calculator__button calculator__button--digits">
              0
            </button>
            <button className="calculator__button calculator__button--digits">
              .
            </button>
            <button className="calculator__button calculator__button--digits">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
