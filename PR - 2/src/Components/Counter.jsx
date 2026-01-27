import { useEffect, useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState("");

  const handleINC = () => {
    setCount(prev => prev + 1);
    setLastAction("INC");
  };
  const handleDEC = () => {
    setCount(prev => prev - 1);
    setLastAction("DEC");
  };

  useEffect(() => {
    console.log("Counter Updated:", count);
  }, [count]);

  let message = "";
  if (count === 0) {
    message = "Data not avaiable.";
  } else if (lastAction === "INC") {
    message = "Counting in progress.";
  } else {
    message = "Counter is going down.";
  }

  return (
    <div className="counter-card">
      <h2 className="counter-heading">Counter</h2>

      <div className="counter-display">{count}</div>

      <div className="status-box">
        <p className={count === 0 ? "status-empty" : ""}>{message}</p>
      </div>
      <div className="action-buttons">
        <Button name="INC" count={count} handleClick={handleINC} />
        <Button name="DEC" count={count} handleClick={handleDEC} />
      </div>
    </div>
  );
};
export default Counter;