import { useState } from 'react';
import './App.css';
import Button from './component/Button';
import changeColor from './utils/changeColor';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  const decrementHandler = () => {
    setCount((previousCount) => previousCount - 1);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Counter</h1>
      </div>
      <div className="counter-container">
        <h2 className="counter-text" id={`${changeColor(count)}`}>
          {count}
        </h2>
      </div>
      <div className="btn-container">
        <Button styling="green" text="+" clickHandler={incrementHandler} />
        <Button styling="red" text="reset" clickHandler={resetHandler} />
        <Button styling="blue" text="-" clickHandler={decrementHandler} />
      </div>
    </div>
  );
};

export default App;
