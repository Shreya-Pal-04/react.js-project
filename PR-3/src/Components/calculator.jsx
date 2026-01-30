import {useState} from "react";
import "./Calculator.css";

const Calculator = () =>{
  const [value, setValue] = useState("");

  const buttons =[
    "AC", "⌫", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", "00", ".", "="
  ];

  const handleClick = (btn) =>{
    const operators = ["+", "-", "*", "/", "%"];

    if (btn === "AC"){
      setValue("");
    } 
    else if (btn === "⌫"){
      setValue(value.slice(0, -1));
    } 
    else if (btn === "="){
      try {
        setValue(eval(value));
      } catch {
        setValue("Error");
      }
    }
    else if (btn === "%"){
      setValue(value / 100);
    }
    else if (operators.includes(btn)){
      if (value === "") return;
      const lastChar = value[value.length - 1];
      if (operators.includes(lastChar)) return;
      setValue(value + btn);
    }
    else if (btn === "00" && value === ""){
      return;
    }
    else{
      setValue(value + btn);
    }
  };

  return(
    <div className="calculator-container">
    <h1 className="calculator-heading">QuickCalc</h1>
    <div className="calculator">
      <input className="display" type="text" value={value} placeholder="0" />

      <div className="buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>

    </div>
    </div>
  );
};
export default Calculator;