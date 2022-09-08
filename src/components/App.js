import React from 'react';
import '../styles/App.scss';

function App() {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  };

  return (
    <div>
      <div className="calculator">
        <div className="calculator__display">
          <span></span>
        </div>

        {/* OPERATORS */}
        <div className="calculator__operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>

          <button>DEL</button>
        </div>

        {/* DIGITS */}
        <div className="calculator__digits">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
