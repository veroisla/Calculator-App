import React from 'react';
import { useState } from 'react';

import Header from '../components/Header';
import Calculator from './Calculator';
import Footer from '../components/Footer';

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
      <Header />
      <Calculator
        calc={calc}
        result={result}
        updateCalc={updateCalc}
        createDigits={createDigits}
        calculate={calculate}
        deleteLast={deleteLast}
        deleteAll={deleteAll}
      />
      <Footer />
    </>
  );
}

export default App;
