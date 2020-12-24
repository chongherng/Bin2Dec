import React, { useState } from "react";
import "./App.css";

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [error, setError] = useState("");

  const checkBinary = (e) => {
    if (e.length !== 9) {
      if (e.slice(-1) === "0" || e.slice(-1) === "1" || e === "") {
        setBinary(e);
        setError("");
      } else setError("Please only enter 0 or 1!");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    let convertedValue = convertBinary(binary);
    setDecimal(convertedValue);
  };

  const convertBinary = (value) => {
    let dec = 0;
    for (let i = 0; i < value.length; i++) {
      if (value.charAt(value.length - i - 1) !== "0") {
        dec += parseInt(Math.pow(2, i));
      }
    }
    return dec;
  };

  return (
    <main>
      <article>
        <header>
          <h3>Bin2Dec Converter</h3>
        </header>
        <form className="form">
          <div className="binary-container">
            <label htmlFor="binary">Binary : </label>
            <input
              type="text"
              name="binary"
              id="binary"
              value={binary}
              onChange={(e) => checkBinary(e.target.value)}
              placeholder="Enter 0 or 1"
            />
            <button className="convert-btn" onClick={handleClick}>
              Convert
            </button>
          </div>
        </form>
        <div className="decimal-container">
          <label htmlFor="decimal">Decimal : </label>
          <input
            type="text"
            name="decimal"
            id="decimal"
            value={decimal}
            readOnly
          />
        </div>
        <div className="error-container">{error}</div>
      </article>
    </main>
  );
}

export default App;
