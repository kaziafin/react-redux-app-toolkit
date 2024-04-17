import React from "react";
import "../style/counter.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Counter = () => {
    const dispatch= useDispatch();
    const count= useSelector((state)=>(state))
    return (
        <div className="counter-container">
            <div>
                <h1 className="counter-title">Increment</h1>
                <button className="counter-button"  onClick={(e) => dispatch({ type: "INCREMENT" })}>
                    Increment
                </button>
            </div>
            <div>
                <h1 className="counter-title">Decrement</h1>
                <button className="counter-button"  onClick={(e) => dispatch({ type: "DECREMENT" })}>
                    Decrement
                </button>
            </div>
            <div>
                <h2 className="counter-title">Count Value</h2>
                <p className="counter-count">{count}</p> {/* Replace 0 with your actual count value */}
            </div>
        </div>
    );
};

export default Counter;
