import { useReducer } from "react";

export const ReducerBasicExample = () => {
    const reducerMethod = (state, action) => {
        switch (action) {
            case "SHOW":
                return {
                    ...state,
                    status: true,
                    color: "text-primary",
                };
            case "HIDE":
                return {
                    ...state,
                    status: false,
                    color: "text-danger",
                };
            default:
                return state;
        }
    };

    const initialValue = {
        status: true,
        color: "text-primary",
    };

    const [state, dispatch] = useReducer(reducerMethod, initialValue);

    return (
        <>
            <h3> This is the example for Basic useReducer Functionality</h3>

            <h5>
                The status is :{" "}
                <code>
                    {" "}
                    {state.status ? (
                        <span className={state.color}>Shown</span>
                    ) : (
                        <span className={state.color}>Hidden</span>
                    )}{" "}
                </code>
            </h5>

            {!state.status && (
                <div
                    className='btn btn-outline-dark'
                    onClick={() => dispatch("SHOW")}
                >
                    Show Status{" "}
                </div>
            )}
            {state.status && (
                <div
                    className='btn btn-outline-danger'
                    onClick={() => dispatch("HIDE")}
                >
                    Hide Status{" "}
                </div>
            )}
        </>
    );
};
