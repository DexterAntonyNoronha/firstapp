import React, { useState, useRef, useEffect } from "react";

export const ReactRefBasic = () => {
    const buttonRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleClick() {
        console.log(buttonRef.current);
        inputRef.current.value = "Resetting now";
    }

    return (
        <>
            <input ref={inputRef}></input>
            <button onClick={handleClick} ref={buttonRef}>
                Click me
            </button>
            <ReactUseEffect></ReactUseEffect>
        </>
    );
};

/* export const ReactUseEffect = () => {
    const [clickCount, setClickCount] = useState(0);
    const [initialCount, setInitialCount] = useState(0);

    useEffect(() => {
        console.log(initialCount);
        document.title = `You clicked ${clickCount} times`;
        setTimeout(() => setInitialCount(0), 2000);
    }, [clickCount]);

    return (
        <>
            <div className='card'>
                <button
                    onClick={() => {
                        setClickCount((prevCount) => prevCount + 1);
                        setInitialCount(initialCount + 1);
                    }}
                >
                    You clicked {clickCount} times
                </button>
                <span> Initial Count is now: {initialCount}</span>
            </div>
        </>
    );
};*/

export const ReactUseEffect = () => {
    const [valueCount, setValueCount] = useState(0);
    // const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // setLoading(false);
            setUserDetails(
                userInfo.map((user) => {
                    return {
                        firstName:
                            user.firstName +
                            " " +
                            user.lastName +
                            " is working in " +
                            user.account,
                    };
                })
            );
        }, 2000);
    }, [userDetails]);

    var userInfo = [
        {
            firstName: "Dexter",
            lastName: "Antony",
            account: "Navistar",
        },
        {
            firstName: "Detta",
            lastName: "Antony",
            account: "OSG",
        },
    ];

    return (
        <div>
            <button
                onClick={() => {
                    setUserDetails([]);
                    setValueCount((prevCount) => prevCount + 1);
                    // setLoading(true);
                }}
            >
                Click Now
            </button>
            <span> You have clicked {valueCount} times</span>
            {/* {loading && (
                <div className='alert alert-info'>
                    Loading... Please wait....
                </div>
            )} */}
            {userDetails.length === 0 &&
                userInfo.map((user) => {
                    return (
                        <div className='card-group'>
                            {user.firstName}, {user.account}
                        </div>
                    );
                })}
            {userDetails.map((user) => {
                return <div className='card-group'>{user.firstName}</div>;
            })}
        </div>
    );
};
