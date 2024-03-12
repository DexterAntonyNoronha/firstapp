import { useState } from "react";

export function ReactStateExample() {

    const [value, setValue] = useState(0);
    const [message, setMessage] = useState("");

    const handleIncrement = () => {
        setMessage("");
        value >= 10 ? setMessage("Counter value cannot be greater than 10") : setMessage("");
        setValue(value >= 10 ? value : value + 1);
    }

    const handleDecrement = () => {
        setMessage("");
        value <= 0 ? setMessage("Counter value cannot be less than 0") : setMessage("");
        setValue(value <= 0 ? value : value - 1);

    }

    const resetCounter = () => {
        setMessage("");
        setValue(0);

    }

    return (
        <div className="card">
            <div className="card-header text-center fw-bold ">A Counter Functionality using useState</div>
            <div className="card-body">
                <div className="">
                    <div className="btn btn-primary mb-2" onClick={handleDecrement}>Decrement</div>
                    <div className="btn btn-primary mb-2 float-end" onClick={handleIncrement}>Increment</div>
                </div>
                <div className="alert alert-info text-center fw-bold"> The value of button is: {value}</div>
                <div className="text-center"><div className="btn btn-danger mb-2 " onClick={resetCounter}>Reset Couter</div></div>
                {(message) && <div className="alert alert-danger">{message}</div>}
            </div>
        </div>
    );
}