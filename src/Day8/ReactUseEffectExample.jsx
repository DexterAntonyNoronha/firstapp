import { useState, useEffect, useRef } from "react";

export const ReactUseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("Active");

    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        console.log("You clicked the button");
        document.title = `You have clicked ${count} time`;
        console.log(buttonRef.current);
        inputRef.current.focus();
        inputRef.current.value = "Setting Value";
    }, [status]);

    const handleChange = () => {
        return inputRef.current.value;
    };

    return (
        <>
            <input
                type='text'
                name='textVal'
                ref={inputRef}
                onChange={handleChange}
            ></input>
            <button
                ref={buttonRef}
                onClick={() => {
                    setCount((prevValue) => prevValue + 1);
                    status === "Active"
                        ? setStatus("Inactive")
                        : setStatus("Active");
                }}
            >
                Cliked {count} times
            </button>

            <span> {status} </span>
        </>
    );
};
