import { useState } from "react";
import "./App.css";

// 1. DISPLAY COMPONENT 
function Display({ value }) {
  return <div className="display">{value || "0"}</div>;
}

// 2. BUTTON COMPONENT 
function CalculatorButton({ label, onClick, className }) {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

// 3. MAIN APP 
function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(Function("return " + input)().toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
  ];

  return (
    <div className="calculator-container">
      <h2>React 
        Calculator
         App
        </h2>
      <div className="calculator">
      
        <Display value={input} />

        <div className="buttons-grid">
          {buttons.map((btn) => {
            let btnClass = "";
            if (btn === "=") btnClass = "equal-btn";
            if (btn === "C") btnClass = "clear-btn";

            return (
              <CalculatorButton
                key={btn}
                label={btn}
                className={btnClass}
                onClick={handleButtonClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;