import React, { useState } from "react";
export default function Counter() {
    const [counter, setCounter] = useState(
        ()=>{
           return 0; 
        }
    );
    //increase counter
    const increase = () => {
      setCounter(count => count + 1);
    };
    //decrease counter
    const decrease = () => {
        if (counter > 0) {
          setCounter(count => count - 1);
        }
      };
    //reset counter 
    const reset = () =>{
      setCounter(0)
    }
    return (
      <div className="counter">
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={increase}>+</button>
          <button className="control__btn" onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    );
}
