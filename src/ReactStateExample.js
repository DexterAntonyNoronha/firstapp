import { useEffect, useState } from "react";

export function ReactStateExample() {

    const [value, setValue] = useState(0);
    const [message, setMessage] = useState("");

    const handleIncrement = () => {
        setMessage("");
        value >= 10 ? setMessage("Counter value cannot be greater than 10") : setMessage("");
        setValue(value >= 10 ? value: value+1);
    }

    const handleDecrement = () => {
        setMessage("");
        value <= 0 ? setMessage("Counter value cannot be less than 0") : setMessage("");
        setValue(value <= 0 ? value : value -1 );
        
    }

    return (
        <>
            <div className="btn btn-primary mb-2" onClick={handleDecrement}>Decrement</div>
            <div className="btn btn-primary mb-2 float-end" onClick={handleIncrement}>Increment</div>
            <div className="alert alert-info text-center fw-bold"> The value of button is: {value}</div>
            {(message)  && <div className="alert alert-danger">{message}</div>}
        </>
    );
}