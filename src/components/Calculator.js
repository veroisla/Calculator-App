import React from 'react';

function Calculator(props) {
  return (
    <div className="container">
      {' '}
      <div className="calculator">
        {/* RESULT  */}
        <div className="calculator__resetAndResult">
          <button
            onClick={props.deleteAll}
            className="calculator__button calculator__button--digits"
          >
            C
          </button>

          <div className="calculator__display">{props.calc || '0'}</div>
        </div>

        {/* OPERATORS */}
        <div className="calculator__operators">
          <button
            onClick={() => props.updateCalc('/')}
            className="calculator__button calculator__button--operators"
          >
            /
          </button>
          <button
            onClick={() => props.updateCalc('*')}
            className="calculator__button calculator__button--operators"
          >
            *
          </button>
          <button
            onClick={() => props.updateCalc('+')}
            className="calculator__button calculator__button--operators"
          >
            +
          </button>
          <button
            onClick={() => props.updateCalc('-')}
            className="calculator__button calculator__button--operators"
          >
            -
          </button>

          <button
            onClick={props.deleteLast}
            className="calculator__button calculator__button--operators"
          >
            DEL
          </button>
        </div>

        {/* DIGITS */}
        <div className="calculator__digits">
          {props.createDigits()}
          <button
            onClick={() => props.updateCalc('0')}
            className="calculator__button calculator__button--digits"
          >
            0
          </button>
          <button
            onClick={() => props.updateCalc('.')}
            className="calculator__button calculator__button--digits"
          >
            .
          </button>

          <button
            onClick={props.calculate}
            className="calculator__button calculator__button--digits"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
