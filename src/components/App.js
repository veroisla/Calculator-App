import React from 'react';
import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['/', '*', '+', '-', '.'];

  //FUNCTION UPDATE CALC
  const updateCalc = (value) => {
    //Prevent the use of operators
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    //Update results
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  //FUNCTION CREATE DIGITS
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}
          className="calculator__button calculator__button--digits"
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  //FUNCTION CALCULATE TOTAL RESULT
  const calculate = () => {
    setCalc(eval(calc.toString()));
  };

  //FUNCTION DELETE LAST BUTTON
  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  //FUNCTION DELETE ALL
  const deleteAll = () => {
    setCalc('');
    setResult('');
  };

  return (
    <>
      <div className="container">
        {' '}
        <div className="calculator">
          {/* RESULT  */}
          <div className="calculator__display">
            {result ? (
              <span className="calculator__display--result"> {result}</span>
            ) : (
              ''
            )}{' '}
            &nbsp;
            {calc || '0'}
          </div>

          {/* OPERATORS */}
          <div className="calculator__operators">
            <button
              onClick={() => updateCalc('/')}
              className="calculator__button calculator__button--operators"
            >
              /
            </button>
            <button
              onClick={() => updateCalc('*')}
              className="calculator__button calculator__button--operators"
            >
              *
            </button>
            <button
              onClick={() => updateCalc('+')}
              className="calculator__button calculator__button--operators"
            >
              +
            </button>
            <button
              onClick={() => updateCalc('-')}
              className="calculator__button calculator__button--operators"
            >
              -
            </button>

            <button
              onClick={deleteLast}
              className="calculator__button calculator__button--operators"
            >
              DEL
            </button>
          </div>

          {/* DIGITS */}
          <div className="calculator__digits">
            {createDigits()}
            <button
              onClick={() => updateCalc('0')}
              className="calculator__button calculator__button--digits"
            >
              0
            </button>
            <button
              onClick={() => updateCalc('.')}
              className="calculator__button calculator__button--digits"
            >
              .
            </button>

            <button
              onClick={calculate}
              className="calculator__button calculator__button--digits"
            >
              =
            </button>
            <button
              onClick={deleteAll}
              className="calculator__button calculator__button--digits"
            >
              C
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
