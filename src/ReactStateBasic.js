import { useState } from 'react';

export function ReactStateBasic() {
    const [value, setValue] = useState(0); 
    const [anotherValue, setAnotherValue] = useState(2);

    const handleClick = () => {
        
        setValue(value + 1);
        console.log("I am clicked again => ", value);
    }

    return (
        <>
            <div className="btn btn-sm btn-success " onClick={
                //() =>  console.log("I am clicked")
                handleClick
            }>Increment</div>
            <span className="alert alert-info">Value is : {value} and {anotherValue}</span>

            <div className="btn btn-sm btn-success " onClick={
                () => setAnotherValue(anotherValue + 2)
            }>Show Increment</div>
        </>
    );
}